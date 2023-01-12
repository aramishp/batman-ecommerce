import Title from "../../components/Title";
import { useState, useEffect } from "react";
import SimpleOrder from "../../components/SimpleOrder";
import Api from "../../api/Api";

export default function History() {
    const [exProducts, setExProducts] = useState([]);
    
    useEffect(() => { 
        const api = new Api(); 
        api.getHistory()
        .then((result) => {
            setExProducts(result.data); 
        })
    }, []);  

    return (
        <>
            <Title title={'History'} />
            {exProducts.map((product) => (
                <SimpleOrder product={product} key={product.name} />
            ))}
        </>
    );
}