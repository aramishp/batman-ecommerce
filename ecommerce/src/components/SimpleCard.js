import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Api from '../api/Api';
import Swal from 'sweetalert2';

export default function SimpleCard(props) {
  const [isLiked, setIsLiked] = useState(props.isLiked);
  const product = props.product;
  const api = new Api();

  function handleClick() {
    if(!isLiked){
      api.postWishlistProduct(product.ID)
      .then(() => {
        console.log("Product added correctly!");
      })
      .catch(() => {
        console.error("An error ocurred, no changes in your wishlist");
      })
    } else {
      api.postDeleteWishlistProduct(product.ID)
      .then(() => {
        console.log("Product deleted correctly!");
      })
      .catch(() => {
        console.error("An error ocurred, no changes in your wishlist");
      })
    }
    setIsLiked(!isLiked);
  }

  function handleCartButton() {
    api.postCartProduct(product.ID)
    .then(() => {
      console.log("Product added correctly!");
      Swal.fire(
        'Thank you!',
        'Your product is waiting for you in the cart. ',
        'success'
      )
    })
    .catch(() => {
      console.error("An error ocurred, no changes in your wishlist");
    });
  }

  return (
    <Col>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={`/products/${product.name.toLowerCase()}.jpg`} className='imgs'/>
          <Card.Body>
              <Card.Title>{product.name.replaceAll('-',' ')}</Card.Title>
              <Card.Text>
              {product.description}
              </Card.Text>
          </Card.Body>
          <Card.Body>
              <Card.Text>
              ${product.price}
              </Card.Text>
              <div className='footer-container'>
                <Button onClick={handleCartButton} variant="primary">Add to Cart!</Button>
                <Button 
                  className='heart-size'
                  onClick={handleClick} 
                  variant='light'>
                  {isLiked ? '❤' : '🖤'}
                </Button>
              </div>  
          </Card.Body>
      </Card>
    </Col>
  );
}