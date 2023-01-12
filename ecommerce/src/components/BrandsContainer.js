import BrandCircle from './BrandCIrcle';
import './BrandContainer.css';

export default function BrandsContainer() {
    const brands = ['asus', 'dell', 'hp', 'mac', 'msi'];

    return (
        <div className="brands-container">
            {
                brands.map(image => (
                    <BrandCircle 
                        src={image}
                        key={image} />
                ))
            }
        </div>
    );
}