import React from "react";
import "./ProductsTable.css";
import products from "../../data/products";

export default () => {
    const head = (
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    )

    const rows = products.map((product, i) => {
        return(
            <tr key={product.id} className={i % 2 == 0 ? 'Odd' : 'Even'}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })
    
    
    return(
        <div className="ProductsTable">
            <table>
                <thead>
                    {head}
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
        
    )
}