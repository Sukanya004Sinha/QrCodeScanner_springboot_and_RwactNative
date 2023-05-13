import React, { useState } from 'react'

interface ProductsListProps {
}
const initialProducts = [
    { title: 'Escape from Trakov', price: 60, id: 'eft'},
    { title: 'Hunt Showdown', price: 70, id: 'hunt'}, 
    { title: 'Hell let Loose', price: 55, id: 'hl'}
]
interface Product {
    title : string,
    price : number;
    id : string;
}

const ProductsList: React.FC<ProductsListProps> = ({}) => {
 const [products, setProducts] = useState<Product[]>(initialProducts)
    return (
        <div>
            <h2>Games</h2>
            {products.map(product => <div key = {product.id}>
                <span>{`${product.title} : ${product.price}`}</span>
            </div>
            )}
            <button onClick={()=>setProducts(prevProducts=>[{
                title: 'Half Life',
                price : 100,
                id: 'hl'
            }, ...prevProducts])}>Add Product</button>
        </div>
    );

}
export default ProductsList;
