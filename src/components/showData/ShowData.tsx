import { useEffect, useState } from "react";
import './ShowData.css';

export default function ShowData() {
  const [dogImg, setDogImg] = useState<string>("");

  useEffect(() => { 
   fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
     setDogImg(data.image);
    });
  }, [])

  return (
    <div className="fox">
      <img  src={dogImg} width='500px' height='300px'   alt="dogImg" />
    </div>
  );
}
