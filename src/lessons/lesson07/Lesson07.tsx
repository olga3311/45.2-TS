import MyButton from "../../components/myButton/MyButton";

export default function Lesson07() {
  // !interface - типизация объектов
//

  interface ISuperHero {
    id: number;
    name: string;
    nickname: string;
    superpowers: string[];
    //необязятельный ключ в объекте
    age?: number
  }
// extends
interface ISpaceHero extends ISuperHero{
    homePlanet: string
}


  const hero1: ISuperHero = {
    id: 1,
    name: "Bruce Wayne",
    nickname: "Batman",
    superpowers:[]

  };

//у этого объекта расширенный тип ISpaceHero
  const hero2: ISpaceHero = {
    name: "Clark Kent",
    id: 2,
    nickname: "Superman",
    superpowers: ['super fly', 'super vision'],
    homePlanet: 'Crypton'
  };

  // quick fix
  //через quick fix > add missing properties можно быстро добавить недостающие для соблюдения типизации свойства в объект
const hero3: ISuperHero = {
    id: 0,
    name: "",
    nickname: "",
    superpowers: []
}

//*пример объединения типов
interface IDarkMagic{
    isDark:true;
}

interface ILIghtMagic{
isLight:true;
}

interface IMagic extends IDarkMagic, ILIghtMagic {}

//пример создания объекта с типом IMagic, который наследует IDarkMagic и ILightMagic
const magic: IMagic = {
isDark:true,
isLight: true
}

//пример создания объекта с типом IMagic, который наследует IDarkMagic и ILightMagic
const magic1: IDarkMagic & ILIghtMagic = {
    isDark:true,
    isLight: true
    }
    console.log(magic, magic1);

//============
//! type - типизация объектов
// альтернативное ключевое слово для описания объекта
type User = {
    id: number
    isAdmin: boolean
    name: string
}
// пример объединения типа через type и &
type UserProfile = User & {
    info: string
}

const jane: User = {
    id: 1,
    isAdmin: false,
    name: 'JAne Austin'
}

const neo: UserProfile = {
    id: 10,
    isAdmin: false,
    name: 'Neo',
    info: 'programmer'
}
console.log(jane, neo);

// ! дженерики
  // инструмент с помощью которого мы создаем обобщенные типы
  // работают при создании и использовании функций

  // эта функция ограниченна в передаваемых значениях - можно использовать только числа
  // function makeArray(first:number, second:number):number[] {
  //   return [first, second]
  // }

  // с помощью дженерика можно создать универсальную функцию
  // мы задаем параметр за место которого при вызове функции можно подставить любой тип
  function makeArray<T>(first: T, second: T): T[] {
    return [first, second];
  }

  makeArray<number>(12, 42);
  makeArray<string>('apple', 'apple');
  makeArray<boolean>(true, false);

  // ! типизация массива объектов

  // при типизации массива из объектов мы сначала типизируем один экземпляр (как в случае с ISuperHero)
  // потом описываем типизацию массива через обращение к этому экземпляру и использовании квадратных скобок (ISuperHero[])


  const heroes:ISuperHero[] = [hero1, hero2, hero3]

console.log(heroes);

  return (
    <div>
      <h2>Typescript pt2</h2>
      <p>
        Самое интересное на этом уроке происходит в теле функции компонента и в
        командной строке:
      </p>
      <MyButton func={() => console.log('click!')} name={""} />
    </div>
  );
}
