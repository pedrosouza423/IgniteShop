import { ImageContainer, ProductContainer, ProductDetails } from "../../../styles/pages/product"
import Image from "next/image"

import { GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import { useRouter } from "next/router"

interface ProductProps {
  product: {
    id: string
    name: string
    imageURL: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product ({product} : ProductProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <h1>Carregando...</h1>
  }

  function handleBuyProduct() {
    console.log(product.defaultPriceId)
    
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageURL} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button onClick={handleBuyProduct}>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths = async () => {
  const response = await stripe.products.list()

  const paths = response.data.map(product => ({
    params: {
      id: product.id
    }
  }))

  return {
    paths,
    fallback: true
  }

}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
  const { id } = params

  const product = await stripe.products.retrieve(id, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price
    

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageURL: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}