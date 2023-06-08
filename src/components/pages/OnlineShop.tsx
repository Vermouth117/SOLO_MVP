
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import "./OnlineShop.css";
import Modal from './Modal';

export type FlowerInfo = {
  picture_url: string;
  name: string;
  price: string;
}

const OnlineShop = memo(() => {

  const inputTriggerRef = useRef<HTMLInputElement>(null);
  // const sectionRef = useRef<HTMLElement[] | null[]>([]);
  // const [sectionIndex, setSectionIndex] = useState<number>(NaN);
  const [allFlowerList, setAllFlowerList] = useState([]);
  const [flowerInfo, setFlowerInfo] = useState<FlowerInfo | undefined>();

  useEffect(() => {
    (async () => {
      const allFlowerList = await fetch(
        "/flower"
        // "http://localhost:8080/flower"
      ).then(data => data.json());
      setAllFlowerList(allFlowerList);
    })();
  }, []);

  const handleClick = useCallback((index: number) => {
    // console.log((sectionRef.current[index]?.children[0].children[0] as HTMLImageElement).currentSrc);
    // console.log(sectionRef.current[index]?.children[1]);
    // console.log(sectionRef.current[index]?.children[2]);

    // setSectionIndex(index);
    setFlowerInfo(allFlowerList[index]);
    inputTriggerRef.current?.click();
  }, [allFlowerList]);

  // console.log(allFlowerList);
  // console.log(flowerInfo);

  return (
    <main className="online-shop">
      <h2 className="online-shop-title">Flower</h2>
      <article className="online-shop-cardList">
        {allFlowerList.map((flowerInfo: FlowerInfo, index) => {
          return (
            // <section className="online-shop-card" onClick={() => handleClick(index)} key={index} ref={ref => (sectionRef.current[index] = ref)}>
            <section className="online-shop-card" onClick={() => handleClick(index)} key={index}>
              <div>
                <img className="online-shop-flower" src={flowerInfo["picture_url"]} alt="花束" />
              </div>
              <h3 className="online-shop-flower-title">{flowerInfo["name"]}</h3>
              <p className="online-shop-flower-price">{`¥${flowerInfo["price"].slice(0, -3).concat(",", flowerInfo["price"].slice(-3))}`}</p>
            </section>
          );
        })}
        {/* <section className="online-shop-card" onClick={handleClick}>
          <div>
            <img className="online-shop-flower" src="https://st3.depositphotos.com/1697659/13086/i/450/depositphotos_130863688-stock-photo-wedding-bouquet-of-flowers.jpg" alt="花束" />
          </div>
          <h3 className="online-shop-flower-title">Violet Night</h3>
          <p className="online-shop-flower-price">¥4,400</p>
        </section>
        <section className="online-shop-card" onClick={handleClick}>
          <div>
            <img className="online-shop-flower" src="https://st3.depositphotos.com/10654668/15053/i/450/depositphotos_150539182-stock-photo-beautiful-bouquet-of-roses.jpg" alt="花束" />
          </div>
          <h3 className="online-shop-flower-title">Pink Please</h3>
          <p className="online-shop-flower-price">¥7,700</p>
        </section>
        <section className="online-shop-card" onClick={handleClick}>
          <div>
            <img className="online-shop-flower" src="https://st4.depositphotos.com/13324256/25187/i/450/depositphotos_251879457-stock-photo-partial-view-florist-holding-bouquet.jpg" alt="花束" />
          </div>
          <h3 className="online-shop-flower-title">Elegance</h3>
          <p className="online-shop-flower-price">¥11,000</p>
        </section>
        <section className="online-shop-card" onClick={handleClick}>
          <div>
            <img className="online-shop-flower" src="https://st4.depositphotos.com/13324256/25187/i/450/depositphotos_251879273-stock-photo-partial-view-florist-holding-bouquet.jpg" alt="花束" />
          </div>
          <h3 className="online-shop-flower-title">Always</h3>
          <p className="online-shop-flower-price">¥5,500</p>
        </section>
        <section className="online-shop-card" onClick={handleClick}>
          <div>
            <img className="online-shop-flower" src="https://st.depositphotos.com/1079647/2639/i/450/depositphotos_26398441-stock-photo-wedding-bouquet.jpg" alt="花束" />
          </div>
          <h3 className="online-shop-flower-title">Princess</h3>
          <p className="online-shop-flower-price">¥8,800</p>
        </section> */}
      </article>
      <Modal inputTriggerRef={inputTriggerRef} flowerInfo={flowerInfo} />
    </main>
  );
});

export default OnlineShop;
