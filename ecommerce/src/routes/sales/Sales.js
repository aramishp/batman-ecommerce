import CardList from '../../components/CardList';
import MyPagination from '../../components/MyPagination';
import { useState, useEffect } from 'react';
import Api from '../../api/Api';

export default function Sales(props) {
    const [actualPage, setActualPage] = useState(1);
    const [salesProducts, setSalesProducts] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const [nProducts, setNProducts] = useState();
    const LIMIT = 12;

    useEffect(() => { 
        const api = new Api();
        api.getAllSales()
        .then((result) => {
            setSalesProducts(result.data);
        });
        api.getNSales()
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
    }, [props.isLoggedIn]);  

    return (
        <div className="sales-page">
            {props.isLoggedIn && likedProducts.length ?  
                <CardList productsList={salesProducts} likedProducts={likedProducts}/> : 
            <CardList productsList={salesProducts} likedProducts={[]}/>}
            <MyPagination pages={Math.ceil(nProducts / LIMIT)} active={actualPage} changePage={setActualPage}/>       
        </div>
    );
}