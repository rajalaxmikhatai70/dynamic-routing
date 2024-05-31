import Product from "@/app/components/product";
import Image from "next/image";
export async function generateStaticParams(){
    const res = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    const data = await res.json()


    return data.products.map((product) =>({
        id:product.id.toString(),
    }))
}

async function getProduct(id){
    const res = await fetch(`https://propickproperty.in/backend/todays_news_web/${id}`)
    const data = await res.json();
    return data
}
export default async function productPage({searchParams}){
    const article = await getProduct(searchParams.id)
    console.log(article);
    console.log(searchParams);
    return(
        <div className="flex  flex-col justify-center items-center">
         <div className="font-bold text-center text-black text-4xl mt-3">
            <h1 >{article?.title}</h1>
            </div>
            <div className="mt-3 p-8 justify-self-center">
            <Image
            src={article?.image}
            width={900}
            height={800}
            alt={`${article?.title}`}
            className="rounded-lg"
            loading="eager"
            quality={20}
            /></div>
            
            <div className=" text-black items-end">
                <p>{article?.author}</p>
            </div>

            <div>
                {(() => {
                  const options = {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    timeZone: "Asia/Kolkata", // Specify the desired time zone
                  };

                  const postedAt = new Date(article?.posted_at);
                  return postedAt.toLocaleString("en-US", options);
                })()}
             </div>

            <div>
                {article?.categories}
            </div>
            <div className="text-gray-800 text-lg font-medium font-sans text-justify m-4 w-2/3" >
                <p className="">{article?.content}</p>
            
     
            </div>
         </div>
     
    )
}