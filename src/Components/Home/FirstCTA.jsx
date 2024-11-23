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
import agilentHome from "/assets/Home/agilentHome.jpg";

const FirstCTA = () => {
   return (
      <Stack paddingTop='0'>
         <Stack position='relative' rounded='lg' overflow='hidden'>
            {/* Gradiente en overlay */}
            <Box
               position='absolute'
               top='0'
               left='0'
               width='100%'
               height='100%'
               bg='linear-gradient(225deg, rgba(0,60,92,1) 17%, rgba(0,60,92,0.7) 70%, rgba(0,0,0,0) 85%)'
               zIndex='1'
            />
            <Image
               src={agilentHome}
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
               right={10}
               align='end'
               maxW='70ch'
               zIndex='2'
            >
               <Heading size='2xl' color='white' textAlign="right">
                  Servicio Técnico Agilent ®*
               </Heading>
               <Text fontSize='lg' color='white'  textAlign="right" maxW='60ch'>
                  En Tech Guru ofrecemos un paquete de servicios completo para
                  que puedas trabajar de forma continua y sin contratiempos y
                  hacer que cada proceso sea más eficiente. Para ello, hemos
                  organizado todos los servicios para que cubran todas las
                  situaciones que necesitas.
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
               </Stack>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default FirstCTA;
