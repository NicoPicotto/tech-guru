import Container from "../../Components/Commons/Container/Container";
import HeroQuienesSomos from "../../Components/QuienesSomos/HeroQuienesSomos";
import Mision from '../../Components/QuienesSomos/Mision';
import Politicas from '../../Components/QuienesSomos/Politicas';
import Principios from "../../Components/QuienesSomos/Principios";

const QuienesSomosView = () => {
   return (
      <Container>
         <HeroQuienesSomos />
         <Mision />
         <Principios />
         <Politicas />
      </Container>
   );
};

export default QuienesSomosView;
