import { ImageContainer, ProductContainer, ProductDetails } from "../../../styles/pages/product"
import Image from "next/image"

import { GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import { useRouter } from "next/router"
import axios from "axios"
import { useState } from "react"
import Head from "next/head";


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
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { isFallback } = useRouter()

  if (isFallback) {
    return <h1>Carregando...</h1>
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response:any = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutURL } = response.data

      window.location.href = checkoutURL
      
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar para o checkout.')
    }
    
  }

  return (
    <>
      <Head>
        <title>{product.name} | Iginte Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageURL} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
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