import {
   Link,
   Stack,
   Text,
   Heading,
   Button,
   Image,
   Box,
   useMediaQuery,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import agilentHome from "/assets/Home/agilentHome.jpg";

const FirstCTA = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack paddingTop='0'>
         <Stack
            position='relative'
            rounded='lg'
            overflow='hidden'
            bgColor={isMobile ? "primarioDarker" : "inherit"}
            p={isMobile ? "1rem" : "0"}
         >
            {/* Gradiente en overlay */}
            <Box
               position='absolute'
               display={isMobile && "none"}
               top='0'
               left='0'
               width='100%'
               height='100%'
               bg='linear-gradient(225deg, rgba(0,60,92,1) 17%, rgba(0,60,92,0.7) 70%, rgba(0,0,0,0) 85%)'
               zIndex='1'
            />
            <Image
               src={agilentHome}
               aspectRatio={isMobile ? "auto" : 16 / 9}
               display={isMobile && "none"}
               maxH={isMobile ? "auto" : "30rem"}
               alt='hero home'
               objectFit='cover'
               position='relative'
               zIndex='0'
            />
            <Stack
               gap={5}
               justify='center'
               position={isMobile ? "static" : "absolute"}
               bottom={10}
               right={10}
               align={isMobile ? "start" : "end"}
               maxW='70ch'
               zIndex='2'
               p={isMobile && 2}
            >
               <Heading
                  size={isMobile ? "xl" : "2xl"}
                  color='white'
                  textAlign={isMobile ? "left" : "right"}
               >
                  Servicio Técnico Agilent ®*
               </Heading>
               <Text
                  fontSize='lg'
                  color='white'
                  textAlign={isMobile ? "left" : "right"}
                  maxW='60ch'
               >
                  En Tech Guru ofrecemos un paquete de servicios completos para
                  que puedas trabajar de forma continua y sin contratiempos,
                  haciendo que sus procesos sean más eficientes.
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
