import { Stack, Heading, Text, SimpleGrid, Image, useMediaQuery } from "@chakra-ui/react";
import heroServices from "/assets/Services/servicios-01.jpg";

const HeroServicios = () => {

   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack paddingBottom='4rem' paddingTop='0'>
         <SimpleGrid columns={isMobile ? 1 : 2} spacing={10}>
            <Stack gap={5} justify='center'>
               <Heading size={isMobile ? "xl" : "2xl"}>Servicios y soluciones a tu medida</Heading>
               <Text fontSize='lg'>
                  En Tech Guru ofrecemos un paquete de servicios completo para
                  que puedas trabajar de forma continua y sin contratiempos y
                  hacer que cada proceso sea más eficiente. Para ello, hemos
                  organizado todos los servicios para que cubran todas las
                  situaciones que necesitas.
               </Text>
            </Stack>
            <Stack align='end' display={isMobile ? "none" : "flex"}>
               <Image
                  src={heroServices}
                  maxW='80%'
                  rounded='lg'
                  style={{
                     clipPath:
                        "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
                  }}
               />
            </Stack>
         </SimpleGrid>
      </Stack>
   );
};

export default HeroServicios;
