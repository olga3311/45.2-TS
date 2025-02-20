import { fellowship } from "./fellowship.js";
import "./lesson05.css";
//import HeroCard from "../../components/heroCard/HeroCard.jsx";

function Lesson05() {
  //console.log(fellowship);
  //console.log(fellowship[1].age)
  //console.log(fellowship[1].weapons)

  //   return (
  //     <div className="container">
  //       <h2>React map() components 🧝🏼‍♀️ 🧚🏻‍♀️</h2>
  //       <div>
  //         {fellowship.map((hero, index) => (
  // key - это уникальное значение которое просит передать react в
  //итерируемую верстку для того чтобы не ошибиться в отрисовки при сложных
  //операциях (сортировка / удаление)

  //           <HeroCard
  //             key={index}
  //             name={hero.name}
  //             isDark={hero.isDark}
  //             age={hero.age}
  //             weapons={hero.weapons}
  //             image={hero.image}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h2>React map() components 🧝‍♀️</h2>
      {fellowship.map((hero) => (
        <div className="heroCard" key={hero.id}>
          <p>Hero: {hero.name}</p>
          <img height={150} src={hero.image} alt="" />
          <p>{hero.isDark ? "Villain 🔥" : "Hero ✨"}</p>
          <p>{hero.age} years old</p>

          {/* тернарным оператором проверяем наличие элементов в массиве
          {hero.weapons[0] ? (
            // если есть то выводим через map() оружие и строку разделитель
            <p>⚔️ {hero.weapons.map((el) => " | " + el)} </p>
          ) : (
            // если нет выводим "No weapons"
            <p>No weapons 🫣</p>
          )} */}
        </div>
      ))}
    </div>
  );
}

export default Lesson05;
