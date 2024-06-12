import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../../styles/pages/product"
import Image from "next/image"

import camiseta1 from '../../assets/camisetas/1.png'

export default function Product () {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={camiseta1} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 12,90</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nostrum esse, voluptatum debitis quia aliquid ab iste dicta ex obcaecati, quas ut at dolor earum tenetur, ullam id exercitationem ipsum?</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
