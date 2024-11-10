import Container from "../../Components/Commons/Container/Container";
import CardsServicios from "../../Components/Servicios/Cards";
import MarqueeLogos from "../../Components/Marquee";
import HeroServicios from "../../Components/Servicios/Cards/HeroServicios";
import Mantenimientos from "../../Components/Servicios/Cards/Mantenimientos";

const ServiciosView = () => {
   return (
      <Container>
         <HeroServicios />
         <CardsServicios />
         <MarqueeLogos />
         <Mantenimientos />
      </Container>
   );
};

export default ServiciosView;
