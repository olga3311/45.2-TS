import styles from "./products.module.css";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import { useFormik } from "formik";
import MyButton from "../myButton/MyButton";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const productSchema = Yup.object().shape({
  productCount: Yup.number()
    .typeError("Must be a number")
    .min(1, "Minimum value is 1")
    .max(20, "Maximum value is 20")
    .required("Required field"),
});

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productFormik = useFormik({
    initialValues: { productCount: 5 },
    validationSchema: productSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      const res = await fetch(`https://fakestoreapi.com/products?limit=${values.productCount}`);
      const data = await res.json();
      setProducts(data);
    }
  });
   
  return (
   
      <><form onSubmit={productFormik.handleSubmit}>
      <input
        onChange={productFormik.handleChange}
        name="productCount"
        type="number"
        placeholder="Enter product count"
        value={productFormik.values.productCount} />
      <MyButton />
    </form><span>{productFormik.errors.productCount}</span><div className={styles.gridContainer}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            id={product.id} />
        ))}
      </div></> 
     
    
  );
}
