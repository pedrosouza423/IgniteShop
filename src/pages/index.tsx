import Image from "next/image";
import { styled } from "../../styles";
import { HomeContainer, Product } from "../../styles/pages/home";

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'
import camiseta4 from '../assets/camisetas/4.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image width={520} height={480} src={camiseta1} alt={""}        
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image width={520} height={480} src={camiseta2} alt={""}        
        />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
