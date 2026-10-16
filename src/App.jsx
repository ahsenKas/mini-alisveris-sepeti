import "./App.css";
import { useState } from "react";
import ProductList from "./Components/ProductList.jsx";
import Cart from "./Components/Cart.jsx";

function App() {
  const [sepet, setSepet] = useState([]);

  const toplamFiyat = sepet.reduce(
    (toplam, urun) => toplam + urun.price * urun.quantity,
    0,
  );

  const toplamMiktar = sepet.reduce(
    (toplam, urun) => toplam + urun.quantity,
    0,
  );

  const [favroriler, setFavroriler] = useState([]);
  const [tema, setTema] = useState("light");

  return (
    <div className={`app ${tema === "light" ? "light-theme" : "dark-theme"}`}>
      <ProductList
        sepetim={sepet}
        setSepetim={setSepet}
        favroriler={favroriler}
        setFavroriler={setFavroriler}
      />

      <div className="alt-bolum">
        <div className="sepet-bilgileri">
          <h2>Sepet Bilgileri</h2>

          <Cart
            sepetim={sepet}
            setSepetim={setSepet}
            toplamFiyat={toplamFiyat}
            toplamMiktar={toplamMiktar}
          />

          <div className="sepet-toplamlari">
            <p>Sepet Miktarı: {sepet.length}</p>
            <p>Sepet Toplam Miktarı: {toplamMiktar}</p>
            <p>Sepet Toplam Fiyatı: {toplamFiyat} TL</p>
          </div>
        </div>

        <div className="favoriler">
          <h2>Favoriler</h2>
          {favroriler.length === 0 ? (
            <p>Favori ürün bulunmamaktadır.</p>
          ) : (
            favroriler.map((urun) => (
              <div className="favorite-item" key={urun.id}>
                <img
                  src={urun.image}
                  alt={urun.name}
                  className="favorite-item-image"
                />

                <p>{urun.name}</p>
                <p>{urun.price} TL</p>
              </div>
            ))
          )}
        </div>

        <div className="tema-degistirme">
          <button onClick={() => setTema(tema === "light" ? "dark" : "light")}>
            Tema Değiştir
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
