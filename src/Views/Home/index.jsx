import Container from "../../Components/Commons/Container/Container";
import HeroHome from "../../Components/Home/HeroHome";
import Numbers from '../../Components/Home/Numbers';
import MarqueeLogos from '../../Components/Marquee';

const HomeView = () => {
   return (
      <Container>
         <HeroHome />
         <MarqueeLogos />
         <Numbers />
      </Container>
   );
};

export default HomeView;
