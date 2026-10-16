import "./ProductCard.css";
import { toast } from "react-toastify";
function ProductCard({
  product,
  setSepetim,
  sepetim,
  favroriler,
  setFavroriler,
}) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-card-info">
        <p className="product-card-id">{product.id}</p>
        <h2 className="product-card-name">{product.name}</h2>
        <p className="product-card-price">{product.price} TL</p>
        <p className="product-card-stock">Stok: {product.stock}</p>
      </div>

      <div className="product-card-actions">
        <button
          className="add-to-cart-button"
          onClick={() => {
            const bulunanUrun = sepetim.find((urun) => urun.id === product.id);

            if (bulunanUrun && bulunanUrun.quantity >= bulunanUrun.stock) {
              toast.error("Stokta yeterli ürün bulunmamaktadır");
              return;
            }

            setSepetim((eskiSepet) => {
              if (bulunanUrun) {
                return eskiSepet.map((urun) =>
                  urun.id === product.id
                    ? { ...urun, quantity: urun.quantity + 1 }
                    : urun,
                );
              }

              return [...eskiSepet, { ...product, quantity: 1 }];
            });

            toast.success("Ürün sepete eklendi");
          }}
        >
          Sepete Ekle
        </button>

        <button
          className="favorite-button"
          onClick={() => {
            if (favroriler.some((urun) => urun.id === product.id)) {
              setFavroriler((eskiFavroriler) =>
                eskiFavroriler.filter((urun) => urun.id !== product.id),
              );
            } else {
              setFavroriler((eskiFavroriler) => [...eskiFavroriler, product]);
            }
          }}
        >
          {favroriler.some((urun) => urun.id === product.id) ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
