import {
   Link,
   Stack,
   Text,
   Heading,
   Button,
   Image,
   Box,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import sostenibilidadHome from "/assets/Home/sostenibilidadHome.jpg";
const SecondCTA = () => {
   return (
      <Stack paddingTop='0' marginBottom="2rem">
         <Stack position='relative' rounded='lg' overflow='hidden'>
            {/* Gradiente en overlay */}
            <Box
               position='absolute'
               top='0'
               left='0'
               width='100%'
               height='100%'
               bg='linear-gradient(45deg, rgba(0,60,92,1) 17%, rgba(0,60,92,0.7035407913165266) 49%, rgba(0,0,0,0) 79%);'
               zIndex='1'
            />
            <Image
               src={sostenibilidadHome}
               aspectRatio={16 / 9}
               maxH='30rem'
               alt='hero home'
               objectFit='cover'
               position='relative'
               zIndex='0'
            />
            <Stack
               gap={5}
               justify='center'
               position='absolute'
               bottom={10}
               left={10}
               maxW='70ch'
               zIndex='2'
            >
               <Heading size='2xl' color='white'>
                  Sostenibilidad Ambiental
               </Heading>
               <Text fontSize='lg' color='white' maxW='55ch'>
                  Adoptamos prácticas que minimizan nuestro impacto ambiental.
                  Esto incluye el uso eficiente de recursos, la reducción de
                  residuos, y la implementación de procesos que favorezcan la
                  sostenibilidad a lo largo de nuestra cadena de valor.
               </Text>
               <Stack direction='row'>
                  <Link as={ReachLink} to='/quienes-somos'>
                     <Button
                        aria-label='Ir a la sección Contacto'
                        variant='outline'
                        bgColor='blanco'
                        borderColor='blanco'
                        _hover={{
                           bgColor: "blanco",
                           transform: "translateY(-2px)",
                           dropShadow: "md",
                        }}
                     >
                        Conocé más sobre nosotros
                     </Button>
                  </Link>
               </Stack>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default SecondCTA;
