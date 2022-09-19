import Inventory from './Inventory.jsx';
import './Product.css';

function Product(props) {
  return (
    <div className="product">
      <img src={process.env.PUBLIC_URL + Inventory[props.id].url} alt={Inventory[props.id].name} width="260px" />
      <h2 className="product-name">{Inventory[props.id].name}</h2>
      <form>
        <table>
          <tr>
            <td className="cell-left">
              <label for="glaze_og">Glazing:</label>
            </td>
            <td className="cell-right">
              <select name="glaze_og" id="glaze_og" className="glaze-menu" onchange="glazingChange(this)">
                <option value="0">Keep Original</option>
                <option value="0">Sugar Milk</option>
                <option value="0.5">Vanilla Milk</option>
                <option value="1.5">Double chocolate</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <p>Pack size:</p>
            </td>
            <td className="cell-right">
              <input type="radio" id="og_1" name="pack_size" value="1" onclick="updatePackSize(this)" checked />
              <label for="og_1" className="size-menu">
                1
              </label>
              <input type="radio" id="og_3" name="pack_size" value="3" onclick="updatePackSize(this)" />
              <label for="og_3" className="size-menu">
                3
              </label>
              <input type="radio" id="og_6" name="pack_size" value="6" onclick="updatePackSize(this)" />
              <label for="og_6" className="size-menu">
                6
              </label>
              <input type="radio" id="og_12" name="pack_size" value="12" onclick="updatePackSize(this)" />
              <label for="og_12" className="size-menu size-menu-12">
                12
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="price">$ {Inventory[props.id].price}</h2>
            </td>
            <td className="cell-right">
              <input type="button" className="add-to-cart" value="Add to Cart" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Product;
