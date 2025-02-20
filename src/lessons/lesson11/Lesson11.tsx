// import styles from './Lesson11.module.css'

interface ILesson11Props {
  text?: string;
}

export default function Lesson11({ text = 'text' }: ILesson11Props): JSX.Element {
  return (
    <div>
      <h2>Lesson11</h2>
      <p>{text}</p>
    </div>
  )
}