import CardList from '../../../components/CardList';
import MyPagination from '../../../components/MyPagination';
import { useState, useEffect } from 'react';
import Api from '../../../api/Api';


export default function SalesPhones(props) {
    const [actualPage, setActualPage] = useState(1);
    const [phoneProducts, setPhoneProducts] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const [nProducts, setNProducts] = useState();
    const LIMIT = 12;

    useEffect(() => { 
        const api = new Api();
        api.getCategorySales('phones', (actualPage - 1) * LIMIT, LIMIT)
        .then((result) => {
            setPhoneProducts(result.data); 
        });
        api.getNSalesCategory('phones')
        .then((result) => {
            setNProducts(result.data.N);
        })
        if(props.isLoggedIn) {
            api.getFavoritesById()
            .then((favorites) => {
            const favoritesId = [];
            for(let i = 0; i < favorites.data.length; i++) {
                favoritesId.push(favorites.data[i].product_ID)
            }
            setLikedProducts(favoritesId);
            });
        }
    }, [props.isLoggedIn, actualPage]);  

    return (
        <div className="sales-page">
            {props.isLoggedIn && likedProducts.length ?  
                <CardList productsList={phoneProducts} likedProducts={likedProducts}/> : 
            <CardList productsList={phoneProducts} likedProducts={[]}/>}
            <MyPagination pages={Math.ceil(nProducts / LIMIT)} active={actualPage} changePage={setActualPage}/>      
        </div>
    );
}