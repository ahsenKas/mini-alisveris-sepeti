import ProductCard from "./ProductCard.jsx";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import "./ProductList.css";

function ProductList({ sepetim, setSepetim, favroriler, setFavroriler }) {
  const products = [
    {
      id: 1,
      name: "Kazak",
      price: 750,
      stock: 10,
      image: product1,
    },
    {
      id: 2,
      name: "Bot",
      price: 2200,
      stock: 5,
      image: product2,
    },
  ];

  return (
    <div className="product-list">
      {products.map((urunum) => (
        <ProductCard
          key={urunum.id}
          product={urunum}
          setSepetim={setSepetim}
          sepetim={sepetim}
          favroriler={favroriler}
          setFavroriler={setFavroriler}
        />
      ))}
    </div>
  );
}

export default ProductList;
