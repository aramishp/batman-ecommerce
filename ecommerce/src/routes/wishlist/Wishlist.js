import Title from "../../components/Title";
import { useState, useEffect } from "react";
import CardList from "../../components/CardList";
import Api from "../../api/Api";

export default function Wishlist() {
    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => { 
        const api = new Api();
        api.getFavorites()
        .then((result) => {
            setWishlistProducts(result.data); 
        })
    }, []);  

    return (
        <>
            <Title title={'Wishlist'} />
            {wishlistProducts.length ?  
            <CardList productsList={wishlistProducts} likedProducts={wishlistProducts.map(product => {return product.ID})}/> :
            <></>}
        </>
    );
}