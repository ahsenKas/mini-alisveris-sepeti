import { useState } from "react";
function CartItem({ urun, sepetim, setSepetim }) {
  const [silmeBildirimi, setSilmeBildirimi] = useState("");
  const [urunAzaltma, setUrunAzaltma] = useState("");
  const [urunArttırma, setUrunArttırma] = useState("");
  const toplam_fiyat = urun.price * urun.quantity;
  const [stok_bildirimi, setStok_bildirimi] = useState("");
  return (
    <div>
      <p>{urun.name}</p>
      <p>{urun.price}</p>
      <p>{urun.quantity}</p>
      <button
        onClick={() => {
          setSepetim(sepetim.filter((eleman) => eleman.id !== urun.id));
          setSilmeBildirimi("Ürün sepetten çıkarıldı.");
          setTimeout(() => setSilmeBildirimi(""), 3000);
        }}
      >
        Ürünü sepetten çıkart
      </button>
      <button
        onClick={() => {
          if (urun.quantity === 1) {
            setSepetim(sepetim.filter((eleman) => eleman.id !== urun.id));
          } else {
            setSepetim(
              sepetim.map((eleman) =>
                eleman.id === urun.id
                  ? { ...eleman, quantity: eleman.quantity - 1 }
                  : eleman,
              ),
            );
          }

          setUrunAzaltma("Ürün sayısı azaltıldı.");
          setTimeout(() => setUrunAzaltma(""), 3000);
        }}
      >
        -
      </button>
      <main></main>

      <button
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
      <p>{stok_bildirimi}</p>
      <p>{toplam_fiyat}</p>
    </div>
  );
}

export default CartItem;
