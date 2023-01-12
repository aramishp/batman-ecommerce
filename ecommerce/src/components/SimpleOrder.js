import './SimpleOrder.css';

export default function SimpleOrder(props) {
    return (
        <div className="order-container">
            <div className='order-img-container'>
                <img className='order-img' src={`/products/${props.product.name}.jpg`} alt={props.product.name}/>
            </div>
            <div className='description'>
                <div>
                    <p>{props.product.name}</p>
                    <p>{props.product.description}</p>
                    <p>Quantity: {props.product.quantity}</p>
                </div>
                <div>
                    <p>Price: ${props.product.price}</p>
                </div>
            </div>
        </div>
    );
}