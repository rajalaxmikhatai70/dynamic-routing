'use client'
import { useRouter } from "next/navigation"
export default function ProductButton({id}){
    const router = useRouter()
    function handleClick(){
        router.push(`/products/${id}`)
    }
    return(
        <button onClick={handleClick}>
            Click Me
        </button>
    )
}