import Product from "../components/Product";
async function getProducts(){
    const res = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    const data = await res.json();
    return data.products
}
export default async function Products(){
    const products = await getProducts();
    console.log({products});
    return(
        <>
        <h1 className="font-bold text-3xl text-amber-950 m-3">Products List</h1>
        {
            products.length>0 && (
                products.map(({id,title,price }) =>(
                    <Product key={id} 
                                id={id} 
                                title={title} 
                                price={price}/>
                 ))
            )
            
        }
        </>
    )
}