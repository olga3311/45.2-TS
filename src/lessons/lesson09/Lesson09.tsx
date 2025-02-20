import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson09.module.css";
export default function Lesson09() {
    console.log(styles)
  return (
    <div>

      <h2 className={styles.heading}>Lesson09: CSS modules ☆ </h2>
      <p className={`${styles.desc} ${ styles.textGreen}`}> css модули - технология, чтобы изолировано работать со стилями</p>
      
<MyButton  variant="danger" text="danger"/>
<MyButton  disabled={true} text="disabled"/>
<MyButton  text="primary"/>

<p>Задачу добавления нескольких классов можно решить так:</p>
      <ul className={styles.list}></ul>
    <li> Конкатенация</li>
    <li> Шаблонная сторока</li>
    <li> Библиотека classNames</li>
    </div>
  )
}
