import Product from './Product.jsx';
import './Gallery.css';

function Gallery() {
  return (
    <div className="Gallery">
      <div className="gallery">
        <div className="row">
          <div className="col">
            <Product id="0" />;
          </div>
          <div className="col">
            <Product id="1" />;
          </div>
          <div className="col">
            <Product id="2" />;
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Product id="3" />;
          </div>
          <div className="col">
            <Product id="4" />;
          </div>
          <div className="col">
            <Product id="5" />;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
