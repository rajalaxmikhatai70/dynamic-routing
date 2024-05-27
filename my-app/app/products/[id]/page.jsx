import Product from "@/app/components/product";

export async function generateStaticParams(){
    const res = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    const data = await res.json()


    return data.products.map((product) =>({
        id:product.id.toString(),
    }))
}

async function getProduct(id){
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json();
    return data
}
export default async function productPage({params}){
    const product = await getProduct(params.id)
    console.log({product});
    return(
        <Product title = {product.title} price={product.price}/>
    )
}