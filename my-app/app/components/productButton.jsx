"use client"
import { useRouter } from "next/navigation"
export default function ProductButton({id}){
    const router = useRouter()
    function handleClick(){
        router.push(`/products/${id}`)
    }
    return(
        <button onClick={handleClick} className="border border-blue-400 bg-blue-500 text-black font-bold">
            Click Me
        </button>
    )
}