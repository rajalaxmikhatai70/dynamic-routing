import Link from "next/link";
import Product from "../components/Product";
async function getProducts() {
  const res = await fetch("https://propickproperty.in/backend/todays_news_web");
  const data = await res.json();
  // console.log(data)
  return data.posts;
}
export default async function Products() {
  const products = await getProducts();
  // console.log({products}, 'pp');
  return (
    <div className="flex flex-col">
      
      <h1 className="font-bold text-3xl text-amber-950 m-3 text-center pt-2"> Todays Updated News </h1>
      {products.length > 0 &&
        products.map((item, index) => {
          console.log(item);            
          return(
           
            <Link   href={{
              pathname: `/products/${item.slug? item.slug : item.title
                ?.replace(/\s+/g, "-")
                ?.replace(/%7C$/, "")
                ?.slice(0, -2)}`,
              query: { id: item.id },
            }}>
          <Product item={item} 
                   key={index}
          /></Link>
          
          )
         
        })}
    </div>
  );
}
