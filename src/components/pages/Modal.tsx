
import React, { ChangeEvent, MouseEventHandler, RefObject, memo, useCallback, useReducer, useState } from 'react';

import "./Modal.css";
import { FlowerInfo } from "./OnlineShop"

type Props = {
  inputTriggerRef: RefObject<HTMLInputElement>;
  // sectionRef: RefObject<HTMLElement[] | null[]>;
  // sectionIndex: number;
  // allFlowerList: FlowerInfo[];
  flowerInfo: FlowerInfo | undefined;
}

const Modal: React.FC<Props> = memo(({ inputTriggerRef, flowerInfo }) => {

  // console.log((sectionRef.current && sectionRef.current[sectionIndex]?.children[0].children[0] as HTMLImageElement)?.currentSrc);

  const [count, dispatch] =
    useReducer((prev: number, { type, value }: { type: string, value: number | null }) => {
      switch(type) {
        case "decrease":
          return --prev;
        case "increase":
          return ++prev;
        case "update":
          return value === null ? prev : value ;
        default:
          return prev;
      }
    }, 1);

  const handleCount: MouseEventHandler = useCallback((e) => {
    console.log(e.currentTarget.getAttribute("class"));
    const action = e.currentTarget.getAttribute("class");
    action && dispatch({ type: action, value: null });
  }, []);

  const inputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "updata", value: parseInt(e.target.value) });
  }, []);

  return (
    <main className="modal-wrap">
      <input id="trigger" type="checkbox" ref={inputTriggerRef} />
      <article className="modal-overlay">
        <label htmlFor="trigger" className="modal-trigger"></label>
        <section className="modal-content">
          <label htmlFor="trigger" className="close-button">✖️</label>
          <section className="modal-content-flower">
            <div>
              <img className="online-shop-flower" src={flowerInfo && flowerInfo["picture_url"]} alt="花束" />
            </div>
            <div className="modal-content-flower-card">
              <h2 className="modal-content-flower-title">{flowerInfo && flowerInfo["name"]}</h2>
              <p className="modal-content-flower-price">{flowerInfo && `¥${flowerInfo["price"].slice(0, -3).concat(",", flowerInfo["price"].slice(-3))}`}</p>
              <form>
                <table className="modal-content-table">
                  <tbody>
                    <tr>
                      <th><label htmlFor="quantity" className="quantity-label">個数</label></th>
                      <td>
                        <div className="modal-content-table-box">
                          <button type="button" className="decrease" onClick={handleCount}>−</button>
                          <input type="text" id="quantity" name="quantity" value={count} min="1" className="quantity" onChange={e => inputChange(e)} />
                          <button type="button" className="increase" onClick={handleCount}>+</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button className="modal-content-cart-button">カートに入れる</button>
              </form>
            </div>
          </section>
          <p className="description">気品漂う紫色のブーケです。ブーケの中心を飾るのは、気品漂う紫色とフリルのように波打つ花びらが美しい、ラベンダーカラーのトルコキキョウ。約500品種の中から、ブーケの主役に相応しい逸品を厳選し、一輪でも存在感のあるトルコキキョウを贅沢に使用しました。そんなトルコキキョウを引き立てるのは、花姿、花色ともに個性豊かな旬の草花。トルコキキョウの紫を基調に曲線が美しいグリーンを合わせ、絶妙な色彩を織り成す上品なブーケに仕上げました。落ち着いた気品を感じさせる「Violet Night」は、男女問わずお楽しみいただけます。受け取った瞬間心ときめくひと束を、ぜひ大切な方へ贈ってみてはいかがでしょうか。
          </p>
        </section>
      </article>
    </main>
  );
});

export default Modal;
