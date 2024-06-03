import ProductButton from "./ProductButton";
import Image from "next/image";
export default function Product({item}){
    
    return(
        <div className="flex flex-row  ">

        <div className="m-3 p-3 border-2 border-gray-400 rounded-md bg-slate-400 shadow-lg">

         <p className="font-bold text-center">{item?.title}</p>
         
    <Image
      src={item.image}
      alt="Thumbnail"
      className="w-full h-auto object-cover px-1 rounded-md"
      width={400}
      height={300}
      loading="eager"
      quality={70}
    />    
        </div>
        </div>
    )
}