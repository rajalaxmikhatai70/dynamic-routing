async function getProducts(){
    const res = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    const data = await res.json();
    return data.products
}
export default async function products(){
    const product = await getProducts();
    console.log({product});
    return(
        <>
        <h1>hello world</h1>
        </>
    )
}