import Title from "../../components/Title";
import { useState, useEffect } from "react";
import SimpleOrder from "../../components/SimpleOrder";
import Api from "../../api/Api";

export default function Cart() {
    const [exProducts, setExProducts] = useState([]);

    useEffect(() => { 
        const api = new Api();
        api.getCart()
        .then((result) => {
            setExProducts(result.data); 
        })
    }, []);  

    return (
        <>
            <Title title={'Cart'} />
            {exProducts.map((product) => (
                <SimpleOrder product={product} key={product.name} />
            ))}
        </>
    );
}