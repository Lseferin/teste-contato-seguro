import { Button, Container } from "@mui/material";
import { Background } from "../../Layout/Images";
import { Image } from "../../Layout/GridStyles";
import { Link } from "react-router-dom";
import { BackgroundHome, Navigation } from "./styles";

export default function Home() {
  
  return(
    <Container>
      <BackgroundHome>
        <Image src={Background} />
        <Navigation>
          <Link to="/cadastro-usuario">
            <Button variant="contained" disableElevation>
             Cadastrar Usuário
            </Button>             
          </Link>
          <Link to="/cadastro-empresas">
            <Button variant="contained" disableElevation>
              Cadastrar Empresa
            </Button>              
          </Link>
        </Navigation>       
      </BackgroundHome>
    </Container>
  )
}