import { ImageContainer, ProductContainer, ProductDetails } from "../../../styles/pages/product"
import Image from "next/image"

import { GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"

interface ProductProps {
  product: {
    id: string
    name: string
    imageURL: string
    price: string
    description: string
  }
}

export default function Product ({product} : ProductProps) {

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageURL} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button>Comprar agora</button>
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
    fallback: false
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
        description: product.description
      }
    },
    // revalidate: 60 * 60 * 1 // 1 hour
  }
}