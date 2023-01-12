import { useNavigate } from 'react-router-dom';
import './BrandCircle.css';

export default function BrandCircle(props) {
    const navigate = useNavigate();

    return (
        <div className="circle"
            style={{backgroundImage: `url(branch-logos/${props.src}.png)`}}
            onClick={() => {navigate(`products/${props.src}`)}}
        ></div>
    );
}