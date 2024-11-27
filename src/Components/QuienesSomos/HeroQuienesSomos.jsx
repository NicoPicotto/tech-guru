import { Stack, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import heroServices from "/assets/QuienesSomos/quienes-1.jpg";

const HeroQuienesSomos = () => {
   return (
      <Stack paddingBottom='4rem' paddingTop='0'>
         <SimpleGrid columns={2} spacing={10}>
            <Stack gap={5} justify='center'>
               <Heading size='2xl'>
                  Expertos en Servicio Técnico de Instrumentación Analítica
               </Heading>
               <Text fontSize='lg'>
                  Somos una empresa joven conformada por profesionales con
                  amplia experiencia en el área de servicio técnico post venta
                  para el instrumental analítico marca Hewlett Packard*/ Agilent
                  Technologies**
               </Text>
            </Stack>
            <Stack align='end'>
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

export default HeroQuienesSomos;
