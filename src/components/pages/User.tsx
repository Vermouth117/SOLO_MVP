
import { memo } from "react";

import "./User.css";

const User = memo(() => {
  return (
    <main className="user-info">
      <h2 className="user-title">History</h2>
      <form className="cart-form">
        <table className="cart-table">
          <thead>
            <tr>
              <th colSpan={2}></th>
              <th>価格</th>
              <th>個数</th>
              <th>合計</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "auto" }}>
              <td style={{ padding: 0, borderTop: "1px solid #f1f1f1" }} colSpan={5}>
              </td>
            </tr>
            <tr>
              <td>
                <img className="cart-table-flower" src="https://st3.depositphotos.com/10654668/15053/i/450/depositphotos_150539182-stock-photo-beautiful-bouquet-of-roses.jpg" alt="花束" />
              </td>
              <td className="col2">
                <h3 className="cart-table-flower-title">Pink Please</h3>
                <button type="button" className="deleteButton">キャンセル</button>
              </td>
              <td>
                <p className="online-shop-flower-price">¥7,700</p>
              </td>
              <td>
                <div className="cart-table-box">
                  <input type="text" id="quantity" name="quantity" className="quantity" defaultValue={1} />
                </div>
              </td>
              <td>
                <p className="online-shop-flower-price">¥7,700</p>
              </td>
            </tr>
            <tr style={{ height: "auto" }}>
              <td style={{ padding: 0, borderTop: "1px solid #f1f1f1" }} colSpan={5}>
              </td>
            </tr>
            <tr>
              <td>
                <img className="cart-table-flower" src="https://st3.depositphotos.com/10654668/15053/i/450/depositphotos_150539182-stock-photo-beautiful-bouquet-of-roses.jpg" alt="花束" />
              </td>
              <td className="col2">
                <h3 className="cart-table-flower-title">Pink Please</h3>
                <button type="button" className="deleteButton">キャンセル</button>
              </td>
              <td>
                <p className="online-shop-flower-price">¥7,700</p>
              </td>
              <td>
                <div className="cart-table-box">
                  <input type="text" id="quantity" name="quantity" className="quantity" defaultValue={1} />
                </div>
              </td>
              <td>
                <p className="online-shop-flower-price">¥7,700</p>
              </td>
            </tr>
            <tr style={{ height: "auto" }}>
              <td style={{ padding: 0, borderTop: "1px solid #f1f1f1" }} colSpan={5}>
              </td>
            </tr>
          </tbody>
        </table>
        <section className="total-box">
          <div className="total-box-title">合計金額</div>
          <p className="online-shop-flower-price">¥7,000</p>
        </section>
      </form>
    </main>
  );
});

export default User;
