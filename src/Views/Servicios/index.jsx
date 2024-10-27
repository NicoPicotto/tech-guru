import { Stack, Heading } from "@chakra-ui/react";
import Container from "../../Components/Commons/Container/Container";
import CardsServicios from "../../Components/Servicios/Cards";
import MarqueeLogos from "../../Components/Marquee";

const ServiciosView = () => {
   return (
      <Container>
         <CardsServicios />
         <MarqueeLogos />
      </Container>
   );
};

export default ServiciosView;
