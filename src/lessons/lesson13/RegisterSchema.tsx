import * as Yup from 'yup';
import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson13.module.css";

interface IRegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .matches(/^[?!,.а-яА-ЯёЁ0-9\s]+$/, 'Only letters, numbers, and _ are allowed')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character (@$!%*?&)')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required')
});

export default function RegisterForm(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    } as IRegisterFormValues,
    validationSchema: registerSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  return (
    <div className={styles.formContainer}>
      <h2>Register Form: YUP Validation 🔐</h2>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input onChange={formik.handleChange} name="username" type="text" placeholder="Username" value={formik.values.username} />
        <input onChange={formik.handleChange} name="email" type="text" placeholder="Email" value={formik.values.email} />
        <input onChange={formik.handleChange} name="password" type="password" placeholder="Password" value={formik.values.password} />
        <input onChange={formik.handleChange} name="confirmPassword" type="password" placeholder="Confirm Password" value={formik.values.confirmPassword} />
        <MyButton />
      </form>
      <span>{formik.errors.username}</span>
      <span>{formik.errors.email}</span>
      <span>{formik.errors.password}</span>
      <span>{formik.errors.confirmPassword}</span>
    </div>
  );
}
