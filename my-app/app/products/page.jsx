import Link from "next/link";
import Product from "../components/Product";
async function getProducts() {
  const res = await fetch("https://propickproperty.in/backend/todays_news_web",{next:{revalidate:10}});
  const data = await res.json();
  // console.log(data)
  return data.posts;
}
export default async function Products() {
  const products = await getProducts();
  // console.log({products}, 'pp');
  return (
    <div className="bg-gray-300">
    
      <h1 className="font-bold text-3xl text-amber-950 m-3 text-center pt-2 pb-2"> The Quiver News</h1>
      
    <div className="text-black gap-2 grid grid-cols-3 mb-2 w-2/3 justify-center ml-[20%]">
      
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
    </div>
  );
}
