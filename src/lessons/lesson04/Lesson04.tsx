// в первой трети импорт из др файлов + работа с неизмен данными
import "./lesson04.css";
import { useState } from "react";

function Lesson04() {
  //во второй трети - теле функции  мы работаем с измен данными
  //вызов функ, асинхронные запросы
  //вызов спец методов внутри реакт
  //код ниже сраюотал бы в обычном script.js  но не обнавляет данные на сранице реакт
  /* let count = 1;

  const handlePLus = () => {
    count++;
    console.log(count);  };*/

  //! вместо него мы исп функцию  useState()

  // в useState мы передаем начальное значение для переменной и в ответ получаем
  // массив из двух элементов : 1 перем состояния, 2 функции, которой мы эту переменную перезаписываем

  // для удобствп данные собираем из масива через деструктуризацию

  const [count, setCount] = useState <number> (1);

  const handlePlus = (): void => {
    // с помощью функции прилагающейся к переменной изменяем ее добавив к предыдущему состоянию 1
    setCount((prev) => prev + 1);
  };

  const handleMinus = (): void => {
    setCount((prev) => prev - 1);
  };

  //реализуем кнопку-переключатель для того чтобы прятать и показывать счетчик

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleSwitcher = ():void => {
    //
    setIsVisible(prev => !prev)
    console.log(isVisible)
  }

  console.log('render!')

  const [color, setColor] = useState("black");

  const handleRed = () => {
    setColor("red");
  };
  const handleGreen = () => {
    setColor("green");
  };
  const handleBlue = () => {
    setColor("blue");
  };

  return (
    // * в последней трети - после return мы показываем верстку и отображаем данные в тегах
    <div>
      <h2>UseState() hook 🪝</h2>
      <p>
        Чтобы при изменении переменной, как в примере ниже мы видели результат и
        компонент обновился - не достаточно обычной переменной 🫣
      </p>
      <p>
        Нужно использовать специальную переменную состояния из встроенной в
        React функции useState()
      </p>
      <div>
        <button onClick={handleSwitcher}>
          ✨ {!isVisible ? "show" : "hide"} counter ✨
        </button>
      </div>
      {/* если в переменной isVisible будет true - отобрази данные после && (двойного амперсанда)  */}
      {isVisible && (
        <div className="counter" style={{backgroundColor:color}}>
          <button onClick={handleRed } className="red">red</button>
          <button onClick={handleGreen } className="green">green</button>
          <button onClick={handleBlue } className="blue">blue</button>

          <p>React Counter with useState hook:</p>
          <button onClick={handleMinus}>-</button>
          <span>{count}</span>
          <button onClick={handlePlus}>+</button>
        </div>
      )}
    </div>
  );
}

// добавьте три кнопки 'red', 'green', 'blue'
// сделайте так чтобы по нажатию на разные кнопки менялся цвет counter контейнера

export default Lesson04;
