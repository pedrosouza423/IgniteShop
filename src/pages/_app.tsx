import { globalStyles } from "../../styles/global";
import Logo from "../assets/logo.svg"
import { Container, Header } from "../../styles/pages/app";
import Image  from 'next/image';


globalStyles();

export default function App({ Component, pageProps }) {
  return(
    <Container>
      <Header>
        <Image src={Logo} alt="Logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

