import ProductButton from "./ProductButton";
export default function Product({id,title,price}){
    return(
        <div className="border-2  border-blue-500 m-3 p-3">
            <h2>{title}</h2>
            <p>{price}</p>
            <ProductButton id={id}/>
        </div>
    )
}