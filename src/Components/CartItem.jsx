import { useState } from "react";
import "./CartItem.css";
function CartItem({ urun, sepetim, setSepetim }) {
  const [silmeBildirimi, setSilmeBildirimi] = useState("");
  const [urunAzaltma, setUrunAzaltma] = useState("");
  const [urunArttırma, setUrunArttırma] = useState("");
  const [stok_bildirimi, setStok_bildirimi] = useState("");

  const toplam_fiyat = urun.price * urun.quantity;

  return (
    <div className="cart-item">
      <p className="cart-item-name">{urun.name}</p>
      <p className="cart-item-price">{urun.price} TL</p>
      <p className="cart-item-quantity">Adet: {urun.quantity}</p>

      <div className="cart-item-actions">
        <button
          className="remove-cart-button"
          onClick={() => {
            setSilmeBildirimi("Ürün sepetten çıkarıldı.");

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
              setUrunAzaltma("Ürün sayısı azaltıldı.");
              setTimeout(() => setUrunAzaltma(""), 2000);

              setSepetim(sepetim.filter((eleman) => eleman.id !== urun.id));
            } else {
              setSepetim(
                sepetim.map((eleman) =>
                  eleman.id === urun.id
                    ? { ...eleman, quantity: eleman.quantity - 1 }
                    : eleman,
                ),
              );

              setUrunAzaltma("Ürün sayısı azaltıldı.");
              setTimeout(() => setUrunAzaltma(""), 2000);
            }
          }}
        >
          -
        </button>

        <button
          className="quantity-button"
          onClick={() => {
            if (urun.quantity < urun.stock) {
              setSepetim(
                sepetim.map((eleman) =>
                  eleman.id === urun.id
                    ? { ...eleman, quantity: eleman.quantity + 1 }
                    : eleman,
                ),
              );
              setUrunArttırma("Ürün sayısı artırıldı.");
              setTimeout(() => setUrunArttırma(""), 3000);
            } else {
              setStok_bildirimi("Stokta yeterli ürün bulunmamaktadır");
              setTimeout(() => setStok_bildirimi(""), 3000);
            }
          }}
        >
          +
        </button>
      </div>

      {silmeBildirimi && (
        <p className="cart-item-notification">{silmeBildirimi}</p>
      )}
      {urunAzaltma && <p className="cart-item-notification">{urunAzaltma}</p>}
      {urunArttırma && <p className="cart-item-notification">{urunArttırma}</p>}
      {stok_bildirimi && (
        <p className="cart-item-notification">{stok_bildirimi}</p>
      )}

      <p className="cart-item-total">Toplam: {toplam_fiyat} TL</p>
    </div>
  );
}

export default CartItem;
