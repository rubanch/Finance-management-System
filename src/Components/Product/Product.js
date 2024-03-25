import React from "react";
import "./Product.css";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { cartContext } from "../../App";
import {Header} from './Header';

export const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
//   const name =
//     product.title.length > 21
//       ? product.title.substring(0, 20) + ".."
//       : product.title;

  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };
  return (
    <>
      <Header cart={cart}/>
    <Card style={{ width: "18rem" }} className="mt-4">
      <Card.Img className="card-img" variant="top" src={product.imageUrl} />
      <Card.Body>
        {/* <Card.Title>{name}</Card.Title> */}
        <Card.Text>
          {product.price}
          
          
        </Card.Text>


        <Card.Text>
          {product.product_description}
          
          
        </Card.Text>
        {cart.includes(product) ? (
          <Button
            className="btn btn-danger"
            variant="primary"
            onClick={removeCart}
          >
            Remove Cart
          </Button>
        ) : (
          <Button
            className="btn btn-primary"
            variant="primary"
            onClick={addCart}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
    </>
  );
};
