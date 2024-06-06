import ProductButton from "./ProductButton";
import Image from "next/image";
export default function Product({item}){
  
    // return (
    //     <div className="flex flex-row">
    //       <div className="m-3 p-3 border-2 border-gray-400 rounded-md bg-slate-400 shadow-lg overflow-hidden">
    //         <p className="font-bold text-center">{item?.title}</p>
    //         <div className="border border-gray-400 rounded-md overflow-hidden">
    //           <Image
    //             src={item.image}
    //             width={0}
    //             height={0}
    //             alt="Thumbnail"
    //             className="w-full h-full object-contain rounded-md"
    //             loading="eager"
    //             quality={70}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   );
      
    
    return(
        <div className="flex flex-row  ">

        <div className="m-3 p-3 border-2 border-gray-400 rounded-md bg-slate-400 shadow-lg overflow-hidden">

         <p className="font-bold text-center">{item?.title}</p>
         <div className="border border-red-400  overflow-hidden h-[5vh]">
    <Image
      src={item.image}
      alt="Thumbnail"
      className="w-full h-auto object-cover px-1"
      fill
      loading="eager"
      quality={70}
    />   
    </div> 
        </div>
        </div>
    )
}