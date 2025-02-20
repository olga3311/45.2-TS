import { useEffect, useState } from "react";
import "./Lesson08.css";
import MyButton from "../../components/myButton/MyButton";
import Lesson05 from "../lesson05/Lesson05";

export default function Lesson08(): JSX.Element {

  const [toggle, setToggle] = useState<boolean>(false);
  const[dogImg, setDogImg] = useState<string>('');
  const [count, setCount] = useState<number>(0)

  const handleToggle = (): void => {
    setToggle((prev) => !prev);
  };
  const handleCount = (): void => {
    setCount(prev => prev + 1);
  };

  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then(data => {
  //         console.log(data) })

 // uef - useEffect(() => { }, []);

  //
// ! useEffect принимает в себя два аргумента:
  // 1. действие которое должно произойти
  // 2. массив зависимостей - перечисление переменных на обновление которых можно 'подписать' useEffect и его действие

  // при передаче пустого массива - действие будет срабатывать один раз в начале жизненного цикла

  // !  код внутри этого useEffect с пустым массивом зависимостей сработает только один раз
  useEffect(()=>{
  //* fetch запрос с проверкой ошибки
  fetch("https://dog.ceo/api/breeds/image/random")
  
   // обрабатываем ответ с сервера
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error is ${res.status}`);
      }
      return res.json();
    })
     .then((data) => {
       setDogImg(data.message);
     })
    
    // после throw error мы попадаем в этот блок и выводим сообщение об ошибке в консоль
    .catch((err) => {
        //
      console.error("Error:", err.message);
    });
  }, [])




  console.log("lesson 8 render!");

  return (
    <div>
       <h2>UseEffect() hook ⚡️</h2>
      <h4>3 этапа жизни компонента:</h4>
      <ul className="useEffect-list">
        <li>визуализация компонента - Mounting(монтирование)</li>
        <li>обновление компонента - Updating(обновление)</li>
        <li>удаление компонента из DOM - Unmounting (размонтирование)</li>
      </ul>
      <h4>Этап Updating происходит в двух случаях:</h4>
      <ul className="useEffect-list">
        <li>обновление переменной состояния</li>
        <li>обновление входящий props</li>
      </ul>

      <h4>UseEffect это хук в React который помогает гибко управлять действиями на разных этапах жизненного цикла компонента, изолировать действия от многократного ненужного повторения. UseEffect принимает в себя два аргумента:
      </h4>
      <ul className="useEffect-list">
        <li>действие которое должно произойти</li>
        <li>массив зависимостей - перечисление переменных на обновление которых можно 'подписать' useEffect и его действие</li>
        <li>при передаче пустого массива - действие будет срабатывать один раз в начале жизненного цикла</li>
      </ul>

      <div className="dog-wrapper">
        <img src={dogImg} alt="dogImg" />
      </div>

      <MyButton text={`${toggle ? 'hide' : 'show'} fellowship`} func={handleToggle} name={""} />
      <MyButton text={`${count} + 1`} func={handleCount} name={""} />
       
      {toggle && <Lesson05 />}
    </div>
  );
}

