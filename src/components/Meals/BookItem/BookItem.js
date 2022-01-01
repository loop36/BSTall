import { useContext } from 'react';
import Card from '../../UI/Card'
import MealItemForm from './MealItemForm';
import classes from './BookItem.module.css';
import CartContext from '../../../store/cart-context';
import alchemist from '../../../assets/alchemist.jpg'
const BookItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <Card>
    <div className={classes.meal} >
        <div >
        <img  src={alchemist} alt=" not available"/></div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>      
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      
    </div>
    </Card>
  );
};

export default BookItem;
