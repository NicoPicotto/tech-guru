import Container from "../../Components/Commons/Container/Container";
import HeroHome from "../../Components/Home/HeroHome";
import MarqueeLogos from '../../Components/Marquee';

const HomeView = () => {
   return (
      <Container>
         <HeroHome />
         <MarqueeLogos />
      </Container>
   );
};

export default HomeView;
