import Button from "../Button";

import module from "./style.module.scss";

import first from "./assets/1.png";
import second from "./assets/2.png";
import third from "./assets/3.png";
import fourth from "./assets/4.png";
import fifth from "./assets/5.png";
import heartIcon from "./assets/heart.svg";

function ProductCard({ imageIndex = 0, className = "" }) {
  const images = [
    {
      image: first,
    },
    {
      image: second,
    },
    {
      image: third,
    },
    {
      image: fourth,
    },
    {
      image: fifth,
    },
  ];

  return (
    <div className={module.product + " " + className}>
      <div className={module.product__head}>
        <img
          src={images[imageIndex].image}
          alt=""
          className={module.product__image_main}
        />
        <button className={module.product__heart}>
          <img src={heartIcon} alt="" />
        </button>
      </div>

      <div className={module.product__body}>
        <p>категория товара</p>
        <h5>название этого товара в несколько слов</h5>
        <p>
          <strong>9 999 Р</strong>
          <span>19 999 Р</span>
        </p>

        <div className={module["product-buttons"] + " " + module.desktop}>
          <Button type="black">быстрый заказ</Button>
          <Button>в корзину</Button>
        </div>

        <div className={module["product-buttons"] + " " + module.mobile}>
          <Button type="white">быстрый заказ</Button>
          <button className={module["product-cart__button"]}>
            <svg
              width="26"
              height="30"
              viewBox="0 0 26 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.07745 7.62686V7.43912C5.07745 4.04415 7.41953 1.07987 10.7699 0.234385C12.0083 -0.0781283 13.3071 -0.0781284 14.5455 0.234385C17.8959 1.07987 20.238 4.04415 20.238 7.43913V7.62686H22.6336C23.5453 7.62686 24.319 8.28305 24.4512 9.16829L24.8001 11.5057C25.4872 16.1077 25.4872 20.7834 24.8001 25.3854C24.4683 27.6078 22.6422 29.3259 20.3657 29.5576L19.3621 29.6598C14.9045 30.1134 10.411 30.1134 5.95336 29.6597L4.94978 29.5576C2.67323 29.3259 0.847117 27.6078 0.515312 25.3854C-0.171771 20.7834 -0.17177 16.1077 0.515312 11.5057L0.864283 9.16829C0.996451 8.28304 1.77019 7.62686 2.68187 7.62686H5.07745ZM11.3661 2.50957C12.2134 2.29574 13.1021 2.29574 13.9494 2.50957C16.2418 3.08806 17.8442 5.11625 17.8442 7.43913V7.62686H7.47122V7.43912C7.47122 5.11625 9.0737 3.08806 11.3661 2.50957ZM5.07745 9.97606V13.4999C5.07745 14.1486 5.61331 14.6745 6.27433 14.6745C6.93536 14.6745 7.47122 14.1486 7.47122 13.4999V9.97606H17.8442V13.4999C17.8442 14.1486 18.3801 14.6745 19.0411 14.6745C19.7022 14.6745 20.238 14.1486 20.238 13.4999V9.97606H22.1524L22.4317 11.8462C23.085 16.2224 23.085 20.6687 22.4317 25.0448C22.2586 26.204 21.3061 27.1001 20.1188 27.2209L19.1152 27.3231C14.8217 27.76 10.4937 27.76 6.20028 27.3231L5.19669 27.2209C4.00931 27.1001 3.05686 26.204 2.8838 25.0448C2.23043 20.6687 2.23043 16.2224 2.8838 11.8462L3.16302 9.97606H5.07745Z"
                fill="#1D1D1D"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
