import { notFound } from "next/navigation"

interface infoParams {
    params: {
        productId: string
    }       
}

export default function Products({ params }: infoParams) {
    if (parseInt(params.productId) > 100) {
        notFound()
    }
    return (
        <div>
            <p>Informações do produto {params.productId}</p>
        </div>

    )
}