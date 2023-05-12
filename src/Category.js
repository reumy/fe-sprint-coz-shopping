import category from './img/category.png';
import book01 from './img/book01.png';
import book02 from './img/book02.png';
import { useState } from 'react';

function Category() {
  
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <div>
      <ul className='product'>
          <li className='img'>
            <div className='listImg'><img src={category} /></div>
            <div className='star' onClick={toggleHandler}><img src={isOn ? book02 : book01} /></div>           
          </li>
          <li className='bold'>
            <div>#카테고리 이름</div>
          </li>
        </ul>
    </div>
  );
}

export default Category;
