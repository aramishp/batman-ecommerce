import './SalesHeader.css';
import SalesHeaderCard from './SalesHeaderCard';

export default function SalesHeader() {
    const categoriesImages = ['All-Sales.png', 'Phones.png', 'Laptops.png', 'Memories.png'];
    const links = ['', '/phones', '/laptops', '/memories'];

    return (
        <div className="sales-container">
            <div className='sales-title'>
                <div>Sales</div>
                <div className='description'>Find incredible prices every day!</div>
            </div>
            {
                categoriesImages.map((image, index) => (
                    <SalesHeaderCard linkTo={`sales${links[index]}`} key={image} src={`sales-categories/${image}`} title={image.split('.')[0]}/>
                ))
            }
        </div>
    );
}
