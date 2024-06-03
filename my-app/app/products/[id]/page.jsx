import Product from "@/app/components/product";
import Image from "next/image";


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
            <div className="mt-3 p-8 ">
            <Image
            src={article?.image}
            width={900}
            height={800}
            alt={`${article?.title}`}
            className="rounded-lg"
            loading="eager"
            quality={20}
            /></div>
            <div className="ml-[50%]">
            <div className="text-black font-bold">
                <p>Author:<span className="text-red-700 font-bold">{article?.author}</span> </p>
            </div>

            <div className="font-bold">
                {(() => {
                  const options = {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    timeZone: "Asia/Kolkata", 
                  };

                  const postedAt = new Date(article?.posted_at);
                  return postedAt.toLocaleString("en-US", options);
                })()}
             </div>
             </div>
            <div className="mr-[60%] text-2xl text-red-700 font-bold">
                #{article?.categories}
            </div>
            <div className=" text-lg font-medium font-sans text-justify m-4 w-2/3" >
                <p className="">{article?.content}</p>
            
     
            </div>
         </div>
     
    )
}