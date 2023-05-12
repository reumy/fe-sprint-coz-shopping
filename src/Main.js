import Product from './Product';
import Category from './Category';
import Exhibition from './Exhibition';
import Brand from './Brand';

function Main() {
  return (
    <div>
      <div className="list">
        <h2>상품 리스트</h2>
        <div className='contents'>
          <Product />
          <Category />
          <Exhibition />
          <Brand />
        </div>
      </div>
      <div className="book">
        <h2>북마크 리스트</h2>
      </div>
    </div>
  );
}

export default Main;