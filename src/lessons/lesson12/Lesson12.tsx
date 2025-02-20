import styles from "./Lesson12.module.css";
import MyButton from "../../components/myButton/MyButton";
import { useFormik } from "formik";

interface IFormValue {
  firstname: string;
  lastname: string;
  email: string;
}
export default function Lesson12(): JSX.Element {
  // ! мы вызываем хук useFormik, передав в него объект с настройками для формы и кладем результат в переменную formik для дальнейшей работы

  // * обязательные ключи для объекта с настройками:
  // initialValues - начальные значения
  // onSubmit - функция, которая произойдет при событии submit

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    } as IFormValue,
    // по этом у ключу описано событие, которое произойдет по нажатию кнопки в форме
    onSubmit: (values: IFormValue, { resetForm }) => {
      console.log(values);
      // ! вся логика по нажатию кнопки будет здесь
      // обновление значений формы до initialValues
      resetForm();
    },
  });

  return (
    <div>
      <h2>Lesson 12: Formik 📝</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        {/* name в input должен совпадать с соответствующим полем в initialValues */}
        <input value={formik.values.firstname} onChange={formik.handleChange} name="firstname" type="text" placeholder="firstname" />
        <input value={formik.values.lastname} onChange={formik.handleChange} name="lastname" type="text" placeholder="lastname" />
        <input value={formik.values.email} onChange={formik.handleChange} name="email" type="email" placeholder="email" />
        <MyButton text="send" />
      </form>
    </div>
  );
}
