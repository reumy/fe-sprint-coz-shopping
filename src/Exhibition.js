import exhibition from './img/exhibition.png';
import book01 from './img/book01.png';
import book02 from './img/book02.png';
import { useState } from 'react';

function Exhibition() {
  
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <div>
      <ul className='product'>
          <li className='img'>
            <div className='listImg'><img src={exhibition} /></div>
            <div className='star' onClick={toggleHandler}><img src={isOn ? book02 : book01} /></div>           
          </li>
          <li className='bold'>
            <div>기획전 이름</div>
          </li>
          <li>기획전 설명</li>
        </ul>
    </div>
  );
}

export default Exhibition;
