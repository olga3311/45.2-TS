export default function Lesson06() {
  //* typescript

  // //* 1. string
  // let username = "Olga";
  // username = "Andrew";

  // //*2. number
  // let number: number = 42;
  // number = 4.33;

  // //*3 boolean
  // let isAdmin: boolean = true;
  // isAdmin = 2 > 4;

  // // *4. null(явное отсутствие значения) | undefined(не явное отсутствие значения)

  // //let nothing: undefined = undefined
  // //let empty:null = null

  // // * union type (объединение типов)
  // let value: number | string = 100;
  // value = 1000;
  // value = "my favorite number" + value;

  // // * array (массив)

  // const colors: string[] = ["red", "green", "blue"];

  // colors.push("magenta");

  // const numbers: number[] = [12, 122, 1222];
  // numbers.pop();

  // // *tuple (кортеж)
  // // readonly - неизменяемый массив, те кортежем
  // //const person:readonly[string, number] = ['John', 35]

  // // *function

  // function sum(a: number, b: number): number {
  //   return a + b;
  // }

  // const result: number = sum(42, 100);

  // const showMessage = (message: string | number): void => {
  //   console.log("result: ", message);
  // };

  // const noReturn = showMessage(result);
  // // помним что функции без return возвращают undefined
  // console.log(noReturn);

  // // * any
  // // ленивый тип данных для тех, кто не хочет прописывать типы
  // // использовать не рекомендуется (или только в самых крайних случаях)

  // //let someVar: any = "hello";
  // //someVar = 10

  return (
    <div>
      <h2>Typescript 😏</h2>
      <p>
        Самое интересное на этом уроке происходит в теле функции компонента и в
        командной строке:
      </p>
    </div>
  );
}
