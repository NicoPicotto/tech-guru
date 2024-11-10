import Container from "../../Components/Commons/Container/Container";
import CardsServicios from "../../Components/Servicios/Cards";
import MarqueeLogos from "../../Components/Marquee";
import HeroServicios from "../../Components/Servicios/Cards/HeroServicios";
import { Stack } from "@chakra-ui/react";

const ServiciosView = () => {
   return (
      <Container>
         <HeroServicios />

         <CardsServicios />

         <MarqueeLogos />
      </Container>
   );
};

export default ServiciosView;
