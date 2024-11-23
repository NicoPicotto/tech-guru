import Container from "../../Components/Commons/Container/Container";
import FirstCTA from "../../Components/Home/FirstCTA";
import HeroHome from "../../Components/Home/HeroHome";
import Numbers from "../../Components/Home/Numbers";
import SecondCTA from '../../Components/Home/SecondCTA';
import MarqueeLogos from "../../Components/Marquee";

const HomeView = () => {
   return (
      <Container>
         <HeroHome />
         <MarqueeLogos />
         <FirstCTA />
         <Numbers />
         <SecondCTA />
      </Container>
   );
};

export default HomeView;
