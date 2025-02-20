import styles from "./myButton.module.css";
import cn from 'classnames';

// пример отдельного компонента кнопки
// экспорт по умолчанию написан перед объявлением функции

interface IMyButtonProps {
  variant?: "primary" | "danger"; //тип кнопки чтобы показать стили
  disabled?: boolean; //активная кнопка или нет
  name?: string;
  text?: string;
  type?: "button" | "submit" | "reset";
  func?: () => void;
}

export default function MyButton({
  func = () => {},
  text = "click me",
  type = "submit",
  variant ="primary",
  disabled = false

}: IMyButtonProps) {
  return (
    <button className={cn(styles.myButton, {
[styles.primary]: variant === 'primary',
[styles.danger]: variant ==='danger',
[styles.disabled]: disabled ===true
    })} type={type} onClick={func}>
      {text}
    </button>


  );
}
