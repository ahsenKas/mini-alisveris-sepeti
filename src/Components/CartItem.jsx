import "./CartItem.css";
import { toast } from "react-toastify";
function CartItem({ urun, setSepetim }) {
  const toplam_fiyat = urun.price * urun.quantity;

  return (
    <div className="cart-item">
      <p className="cart-item-name">{urun.name}</p>
      <p className="cart-item-price">{urun.price} TL</p>
      <p className="cart-item-quantity">Adet: {urun.quantity}</p>
      <img src={urun.image} alt={urun.name} className="cart-item-image" />

      <div className="cart-item-actions">
        <button
          className="remove-cart-button"
          onClick={() => {
            toast.info("Ürün sepetten çıkartıldı", { autoClose: 2000 });

            setTimeout(() => {
              setSepetim((oncekiSepet) =>
                oncekiSepet.filter((eleman) => eleman.id !== urun.id),
              );
            }, 2000);
          }}
        >
          Ürünü sepetten çıkart
        </button>

        <button
          className="quantity-button"
          onClick={() => {
            if (urun.quantity === 1) {
              toast.info("Ürün sayısı azaltılıyor ve sepetten çıkartılıyor", {
                autoClose: 2000,
              });

              setTimeout(() => {
                setSepetim((oncekiSepet) =>
                  oncekiSepet.filter((eleman) => eleman.id !== urun.id),
                );
              }, 2000);
            } else {
              toast.info("Ürün sayısı azaltılıyor", { autoClose: 1000 });

              setTimeout(() => {
                setSepetim((oncekiSepet) =>
                  oncekiSepet.map((eleman) =>
                    eleman.id === urun.id
                      ? { ...eleman, quantity: eleman.quantity - 1 }
                      : eleman,
                  ),
                );
              }, 1000);
            }
          }}
        >
          -
        </button>

        <button
          className="quantity-button"
          onClick={() => {
            if (urun.quantity < urun.stock) {
              toast.info("Ürün sayısı arttırıldı", { autoClose: 1000 });
              setTimeout(() => {
                setSepetim((oncekiSepet) =>
                  oncekiSepet.map((eleman) =>
                    eleman.id === urun.id
                      ? { ...eleman, quantity: eleman.quantity + 1 }
                      : eleman,
                  ),
                );
              }, 1000);
            } else {
              toast.error("Stokta yeterli ürün bulunmamaktadır", {
                autoClose: 3000,
              });
            }
          }}
        >
          +
        </button>
      </div>

      <p className="cart-item-total">Toplam: {toplam_fiyat} TL</p>
    </div>
  );
}

export default CartItem;
