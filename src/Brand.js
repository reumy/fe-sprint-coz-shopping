import brand from './img/brand.png';
import book01 from './img/book01.png';
import book02 from './img/book02.png';
import { useState } from 'react';

function Brand() {
  
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <div>
      <ul className='product'>
          <li className='img'>
            <div className='listImg'><img src={brand} /></div>
            <div className='star' onClick={toggleHandler}><img src={isOn ? book02 : book01} /></div>           
          </li>
          <li className='bold'>
            <div>브랜드 이름</div>
            <div>관심고객수</div>
          </li>
          <li className='right'>00,000</li>
        </ul>
    </div>
  );
}

export default Brand;
