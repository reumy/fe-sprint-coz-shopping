import product from './img/product.png';
import book01 from './img/book01.png';
import book02 from './img/book02.png';
import { useState } from 'react';

function Product() {
  
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <div>
      <ul className='product'>
          <li className='img'>
            <div className='listImg'><img src={product} /></div>
            <div className='star' onClick={toggleHandler}><img src={isOn ? book02 : book01} /></div>           
          </li>
          <li className='bold'>
            <div>상품 이름</div>
            <div className='purple'>00%</div>
          </li>
          <li className='right'>상품 가격</li>
        </ul>
    </div>
  );
}

export default Product;
