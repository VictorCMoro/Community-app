import { useRouter } from "next/navigation"


export default function aaa(){
    const router = useRouter()
    const { id } = router.query

    return(
        <h1>olá {id} </h1>
    )
}