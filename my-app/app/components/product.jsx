import ProductButton from "./ProductButton";
import Image from "next/image";
export default function Product({item}){
    
    return(
        <div className="bg-slate-500 w-[100%] flex-1 ">

        <div className="border-2  border-blue-500 m-3 p-3 ">
         <p>{item?.title}</p>
         
    <Image
      src={item.image}
      alt="Thumbnail"
      className="w-full h-auto object-cover px-1 rounded-xl"
      width={400}
      height={300}
      loading="eager"
      quality={70}
    />    
        </div>
        </div>
    )
}