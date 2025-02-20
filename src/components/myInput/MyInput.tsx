import "./MyInput.css";

interface IMyInputProps{
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

function MyInput({ name, type, placeholder, label }: IMyInputProps) {
    return (
      <div className="my-input">
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} type={type} placeholder={placeholder} />
      </div>
    );
  }
  
  export default MyInput;