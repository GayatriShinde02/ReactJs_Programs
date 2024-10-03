import { useState } from "react"

let p1={
    id:1,
    pname:'HP',
    price:50000,
}
let p2={
    id:2,
    pname:'lenova',
    price:60000,
}
let p3={
    id:3,
    pname:'dell',
    price:60000,
}
function ViewProduct()
{
    const products=[p1,p2,p3]
    const [prods,setProd]=useState(products)
    function deatails(product)
    {
        return <tr>
            <td>{product.id}</td>
            <td>{product.pname}</td>
            <td>{product.price}</td>
        </tr>
    }
    return (
    <div>
        <h1>Product Details</h1>
        <table border={2} align="center">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            <tbody>
            {
            prods.map((prod,index)=>deatails(prod))
            }
           </tbody>
           
        </table>

    </div>)
}
export default ViewProduct;