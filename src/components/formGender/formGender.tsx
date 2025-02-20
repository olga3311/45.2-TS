import { useState } from "react";
//import styles from './formGender.module.css';
import *  as Yup from "yup";
import { useFormik } from 'formik';
import MyButton from "../myButton/MyButton";

interface IGenderData {
  count: number;
  name: string;
  gender: string;
  probability: number;
}

interface IFormValues {
  name: string;
}

const initialGenderData: IGenderData = {
  count: 0,
  name: "",
  gender: "",
  probability: 0
};

// interface IName{
//   name: string,
// }

const schema = Yup.object().shape({
name:Yup
.string()
.typeError('incorrect name')
.required()
.max(30, 'Your name is too long.')
.min(1, ('too short'))
.matches(/^[?!,.а-яА-ЯёЁ0-9\s]+$/,'use only alphabet letters')
})


export default function FormGender(): JSX.Element {

  const [genderData, setGenderData] = useState<IGenderData>(initialGenderData);


  const getGenderData = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    // записываем данные в переменную состояния
    setGenderData(data);
  };

  const formik = useFormik({
    initialValues: {
      name: ''
    } as IFormValues,
    validationSchema:schema,
    validateOnChange:false,
    onSubmit: (values: IFormValues, { resetForm }) => {
      // вызов функции с fetch запросом
      getGenderData(values.name);
      resetForm();
    }
  });

  // ! стрелочные функции нельзя вызвать до объявления
  // const test = () => {}
  // test()

  // ? а обычные можно - это называется hoisting (поднятие)
  // test();
  // function test() { }

  return (
    <div>
      <h2>Know your gender 🔮</h2>
      <form onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} type="text" name='name' placeholder="type your name here" value={formik.values.name} />
        <MyButton text="get gender" />
      </form>
      {genderData.name && (
        <p>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '🙋‍♀️'} {genderData.probability * 100}% </p>
      )}
      <span style={{color:'blue'}}>{formik.errors.name}</span>
    </div>
  );
}
