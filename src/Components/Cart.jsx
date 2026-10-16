import CartItem from "./CartItem";

function Cart({ sepetim, setSepetim, toplamFiyat, toplamMiktar }) {
  return (
    <div>
      {sepetim.map((urun) => (
        <CartItem
          key={urun.id}
          urun={urun}
          setSepetim={setSepetim}
          sepetim={sepetim}
          toplamFiyat={toplamFiyat}
          toplamMiktar={toplamMiktar}
        />
      ))}
    </div>
  );
}

export default Cart;
