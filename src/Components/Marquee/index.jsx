import { Image } from "@chakra-ui/react";
import Marquee from "react-marquee-slider";
import { Stack, Box, useMediaQuery, Heading } from "@chakra-ui/react";

const MarqueeLogos = ({ bgColor }) => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   const logos = [
      { src: "/assets/Clients/bayer.png", alt: "Bayer" },
      { src: "/assets/Clients/richmond.png", alt: "Bayer" },
      { src: "/assets/Clients/roche.png", alt: "Bayer" },
      { src: "/assets/Clients/sgs.png", alt: "Bayer" },
      { src: "/assets/Clients/zoovet.png", alt: "Bayer" },
   ];
   return (
      <Stack align='center' paddingInline='2rem' paddingBlock='2rem'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <Heading mb={5} textAlign='center'>Confían en nosotros </Heading>
            <Stack overflow='hidden' maxW='80rem' w='100%' position='relative'>
               <Box
                  position='absolute'
                  top={0}
                  bottom={0}
                  left={0}
                  width='5rem'
                  bgGradient={`linear(to-r, ${
                     bgColor ? bgColor : "#e3e3e3"
                  }, transparent)`}
                  zIndex={1}
               />
               <Box
                  position='absolute'
                  top={0}
                  bottom={0}
                  right={0}
                  width='5rem'
                  bgGradient={`linear(to-l, ${
                     bgColor ? bgColor : "#e3e3e3"
                  }, transparent)`}
                  zIndex={1}
               />
               <Marquee velocity={50}>
                  {logos.map((logo) => (
                     <Stack key={logo.alt} marginInline='2.5rem'>
                        <Image
                           src={logo.src}
                           alt={logo.alt}
                           w='12rem'
                           transition='filter 0.2s ease'
                           filter='grayscale(1)'
                           _hover={{ filter: "none" }}
                        />
                     </Stack>
                  ))}
               </Marquee>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default MarqueeLogos;
