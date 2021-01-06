import './styles.css';
import { useEffect, useState } from 'react';
import { fetchProduts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { Product } from './types';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProduts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;