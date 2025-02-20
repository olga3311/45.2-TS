//на место props придет объект с переданными в родителе
//данными по соответствующим ключам
import MyButton from "../myButton/MyButton";

interface IUserCardProps {
  name: string;
  age: number;
  lastname: string;
}


function UserCard({name, age, lastname}:IUserCardProps) {
  // если не знать синтаксис деструктуризации и 
  //хочется разделить объект на много переменных 
  //со значениями по соответствующим ключам - нужно писать много строк кода
  // const name = props.name
  // const age = props.age

  // функция обработчик
  const handleClick = () => {
    alert(`Hello, ${name}!`);
  };

  // console.log(props)
  return (
    <div>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Lastname: {lastname}</p>
      {/* <MyButton text={"Choose hero"+ props.name}/> */}
      <MyButton func={handleClick} text={`Choose ${name}`} name={""} />
    </div>
  );
}

export default UserCard;
