import Title from "../../components/Title";
import { useState, useEffect } from "react";
import SimpleOrder from "../../components/SimpleOrder";
import Api from "../../api/Api";

export default function Purchases() {
    const [exProducts, setExProducts] = useState([]);

    useEffect(() => { 
        const api = new Api();
        api.getPurchases()
        .then((result) => {
            setExProducts(result.data); 
        })
    }, []);  

    return (
        <>
            <Title title={'Finished'} />
            {exProducts.map((product) => (
                <SimpleOrder product={product} key={product.name}/>
            ))}
        </>
        
        /*
        <>
            <Orders products={exProducts}/>
            <Orders products={exProducts}/>
        </>*/
    );
}