import {
   Stack,
   Heading,
   Text,
   Box,
   Image,
   Button,
   Link,
} from "@chakra-ui/react";
import heroServices from "/assets/Home/hero-img.jpg";
import { Link as ReachLink } from "react-router-dom";

const HeroHome = () => {
   return (
      <Stack paddingBottom='4rem' paddingTop='0'>
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
               src={heroServices}
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
                  Servicio Técnico para Instrumental Analitico
               </Heading>
               <Text fontSize='lg' color='white'>
                  Somos una empresa enfocada al mantenimiento, calificación y
                  reparación de sistemas cromatográficos para laboratorios.
                  Abordamos tanto software como hardware y nos especializamos en
                  su coordinación y compatibilidad general y mantenimiento
                  sostenible.
               </Text>
               <Stack direction='row'>
                  <Link as={ReachLink} to='/servicios'>
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
                        Conocé nuestros servicios
                     </Button>
                  </Link>
                  <Link as={ReachLink} to='productos'>
                     <Button
                        aria-label='Ir a la sección Contacto'
                        variant='outline'
                        color='blanco'
                        borderColor='blanco'
                        _hover={{
                           bgColor: "blanco",
                           transform: "translateY(-2px)",
                           dropShadow: "md",
                           color: "negro",
                        }}
                     >
                        Stock de equipos y repuestos
                     </Button>
                  </Link>
               </Stack>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default HeroHome;