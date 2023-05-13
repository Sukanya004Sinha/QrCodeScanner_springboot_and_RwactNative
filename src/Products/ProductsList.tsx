import React, { useState } from 'react'

interface ProductsListProps {
}
const initialProducts = [
    { title: 'Escape from Trakov', price: 60, id: 'eft'},
    { title: 'Hunt: Showdown', price: 70, id: 'hunt'}, 
    { title: 'Hell let Loose', price: 55, id: 'hll'}
]


const ProductsList: React.FC<ProductsListProps> = ({}) => {
 const [products, setProducts] =useState(initialProducts)
    return (
        <div className='App'>
            <h2>Games</h2>
            {initialProducts.map(product => <div key = {product.id} >
                <span>{`${product.title} : ${product.price}`}</span>
            </div>
            )}
            <button>Add Product</button>
        </div>
    );

}
export default ProductsList;
