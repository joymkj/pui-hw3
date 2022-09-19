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
              <label for={Inventory[props.id].name}>Glazing:</label>
            </td>
            <td className="cell-right">
              <select
                name={Inventory[props.id].name}
                id={Inventory[props.id].name}
                className="glaze-menu"
                onchange="glazingChange(this)">
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
              <input type="radio" id={`${props.id}+1`} name={`${props.id}`} value="1" defaultChecked />
              <label for="1" className="size-menu">
                1
              </label>
              <input type="radio" id={`${props.id}+3`} name={`${props.id}`} value="3" />
              <label for={`${props.id}+3`} className="size-menu">
                3
              </label>
              <input type="radio" id={`${props.id}+6`} name={`${props.id}`} value="6" />
              <label for={`${props.id}+6`} className="size-menu">
                6
              </label>
              <input type="radio" id={`${props.id}+12`} name={`${props.id}`} value="12" />
              <label for={`${props.id}+12`} className="size-menu size-menu-12">
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
