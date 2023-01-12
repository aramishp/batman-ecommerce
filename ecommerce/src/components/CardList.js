import Row from 'react-bootstrap/Row';
import './CardList.css';
import SimpleCard from './SimpleCard';

function CardList(props) {
  const likedProducts = props.likedProducts;
  const products = props.productsList;

  return (
    <Row xs={1} md={4} className="g-4 w-75 m-auto">
      {products.map((product) => (
        <SimpleCard key={product.name} product={product} isLiked={likedProducts.includes(product.ID) ? true : false}/>
      ))}
    </Row>
  );
}

export default CardList;