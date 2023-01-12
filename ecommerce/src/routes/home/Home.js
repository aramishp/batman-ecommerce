import Title from '../../components/Title';
import CardList from '../../components/CardList';
import MyPagination from '../../components/MyPagination';
import MyCarousel from '../../components/MyCarousel';
import { useEffect, useState } from 'react';
import Api from '../../api/Api';
import BrandsContainer from '../../components/BrandsContainer';

export default function Home(props) {
    const [actualPage, setActualPage] = useState(1);
    const [productsList, setProductsList] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const [nProducts, setNProducts] = useState();
    const LIMIT = 12;

    useEffect(() => { 
        const api = new Api();
        api.getHomeProducts((actualPage - 1) * LIMIT, LIMIT)
        .then((result) => {
            setProductsList(result.data); 
        });
        api.getNProducts()
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
        <>  
            <MyCarousel />
            <Title title={'Most selled brands'} />
            <BrandsContainer />
            <Title title={'Most selled products'} />
            {props.isLoggedIn && likedProducts.length ?  
                <CardList productsList={productsList} likedProducts={likedProducts}/> : 
            <CardList productsList={productsList} likedProducts={[]}/>}
            <MyPagination pages={Math.ceil(nProducts / LIMIT)} active={actualPage} changePage={setActualPage}/>
        </>
      );
}