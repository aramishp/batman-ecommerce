import './SalesHeaderCard.css';
import { Link } from "react-router-dom";

export default function SalesHeaderCard(props) {
    return (
        <div className='card-size'>
            <Link to={`/${props.linkTo}`}>
                <div className='header-card' style={{backgroundImage: `url(/${props.src})`}}></div>
            </Link>
                <div className='figcaption'>{props.title}</div>
        </div>
            
    );
}