import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../api/Api";
import CardList from "../../components/CardList";
import MyPagination from "../../components/MyPagination";
import SalesHeader from "../../components/SalesHeader";

export async function loader({ params }) {
    const api = new Api()
    const result = await api.getSearchedProduct(params.product)
    return result.data;
}

export default function SearchedProducts(props) {
    const [actualPage, setActualPage] = useState(1);
    const [likedProducts, setLikedProducts] = useState([]);
    const LIMIT = 12;
    /*
    
    */
    useEffect(() => { 
        const api = new Api();
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

    const products = useLoaderData();

    return (
        <div className="sales-page">
            <SalesHeader />  
            {props.isLoggedIn && likedProducts.length ?  
                <CardList productsList={products.slice((actualPage - 1) * 12, actualPage * 12)} likedProducts={likedProducts}/> : 
            <CardList productsList={products.slice((actualPage - 1) * 12, actualPage * 12)} likedProducts={[]}/>}
            <MyPagination pages={Math.ceil(products.length / LIMIT)} active={actualPage} changePage={setActualPage}/>      
        </div>
    );
}