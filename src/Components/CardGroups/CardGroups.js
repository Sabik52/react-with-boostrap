import React from 'react';
import Card from '../Card/Card';

const CardGroups = () => {
    const products = [
        {id:1, name: 'Laptop Pro', price: 125000},
        {id:2, name: 'Laptop Crow', price: 125000},
        {id:3, name: 'Laptop Grow', price: 125000},
    ]
    return (
        <div>
            <h1>This is my Cards</h1>
            <div className="card-group">
                {
                    products.map(product => <Card 
                        key={product.id} 
                        product = {product}></Card>)
                }
                
            </div>
        </div>
    );
};

export default CardGroups;