import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import Fetchfox from "./components/fetchFox/Fetchfox";
import NoPage from "./components/noPage/NoPage";
import Lesson12 from "./lessons/lesson12/Lesson12";
import HomePage from "./components/homePage/HomePage";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import FormGender from "./components/formGender/formGender";
import Lesson13 from "./lessons/lesson13/Lesson13";
import Lesson14 from "./lessons/lesson14/Lesson14";
import ProductPage from "./components/productPage/ProductPage";
import RegisterSchema from "./lessons/lesson13/RegisterSchema";
/* import Lesson10 from "./lessons/lesson10/Lesson10";
import Lesson11 from "./lessons/lesson11/Lesson11"; */

function App() {
  return (
    // оборачиваем все приложение в особый компонент HashRouter из библиотеки React Router
    <HashRouter>
      {/* оборачиваем компонент Routes (пути вокруг всех элементов) */}
      <Routes>
        {/* следующая обертка над элементами - компонент Route */}
        {/* передаем два props: path - строчное значение пути до компонента в URL,
         element - компонент который 'прописываем' по выбранному пути */}

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<h3>Home Page 🏡</h3>} /> */}
          <Route path="form-gender" element={<FormGender />} />
          <Route path="fellowship" element={<Lesson05 />} />
          <Route path="lesson-6" element={<Lesson06 />} />
          <Route path="lesson-7" element={<Lesson07 />} />
          <Route path="lesson-8" element={<Lesson08 />} />
          <Route path="lesson-9" element={<Lesson09 />} />
          <Route path="lesson-10" element={<h2>React Routing 🚦</h2>} />
          <Route path="lesson-11" element={<h2>React Test 🫣</h2>} />

          <Route path="lesson-12" element={<Lesson12 />} />
          <Route path="lesson-13" element={<Lesson13 />} />
          <Route path="registerSchema" element={<RegisterSchema />} />
          <Route path="lesson-14" element={<Lesson14 />} />
          <Route path="lesson-14/:id" element={<ProductPage />} />

          <Route path="fellowship" element={<Lesson05 />} />
          <Route path="fetchFox" element={<Fetchfox />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
