import {
   Stack,
   Image,
   Text,
   Link,
   Divider,
   Heading,
   Button,
   IconButton,
   useMediaQuery,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import Container from "../Commons/Container/Container";
import logo from "/assets/logo.svg";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack bgColor='primarioDarker'>
         <Container>
            <Stack paddingTop='2rem'>
               <Stack
                  justify='space-between'
                  direction={isMobile ? "column" : "row"}
                  gap={isMobile && "2rem"}
               >
                  <Link as={ReachLink} to='/' display={isMobile && "none"}>
                     <Image
                        src={logo}
                        filter='brightness(10)'
                        alt='Logo de TechGuru'
                        h='100px'
                     />
                  </Link>
                  <Stack
                     direction={isMobile ? "column" : "row"}
                     gap={isMobile ? "2rem" : 20}
                  >
                     <Stack>
                        <Heading size='md' color='white'>
                           Sitio
                        </Heading>
                        <Link as={ReachLink} to='/quienes-somos'>
                           <Button
                              variant='link'
                              color='blanco'
                              aria-label='Ir a la sección Nosotros'
                              _hover={{
                                 textDecoration: "underline",
                                 textUnderlineOffset: "2px",
                                 textDecorationColor: "blanco",
                              }}
                           >
                              Quienes Somos
                           </Button>
                        </Link>
                        <Link as={ReachLink} to='/servicios'>
                           <Button
                              aria-label='Ir a la sección Servicios'
                              variant='link'
                              color='blanco'
                              _hover={{
                                 textDecoration: "underline",
                                 textUnderlineOffset: "2px",
                                 textDecorationColor: "blanco",
                              }}
                           >
                              Servicios
                           </Button>
                        </Link>

                        <Link as={ReachLink} to='/productos'>
                           <Button
                              aria-label='Ir a la sección Productos'
                              variant='link'
                              color='blanco'
                              _hover={{
                                 textDecoration: "underline",
                                 textUnderlineOffset: "2px",
                                 textDecorationColor: "blanco",
                              }}
                           >
                              Productos
                           </Button>
                        </Link>
                        <Link as={ReachLink} to='/contacto'>
                           <Button
                              aria-label='Ir a la sección Productos'
                              variant='link'
                              color='blanco'
                              _hover={{
                                 textDecoration: "underline",
                                 textUnderlineOffset: "2px",
                                 textDecorationColor: "blanco",
                              }}
                           >
                              Contactate
                           </Button>
                        </Link>
                     </Stack>
                     <Stack gap={3}>
                        <Heading size='md' color='white'>
                           Contacto
                        </Heading>
                        <Text color='blanco'>
                           Solari 780 - Ciudadela - Buenos Aires.
                        </Text>
                        <Text
                           as='a'
                           target='_blank'
                           href='https://wa.link/3csjhw'
                           color='blanco'
                        >
                           (0358) 155123456
                        </Text>
                        <Text color='blanco'>ventas@techguru.com.ar</Text>
                        {/* <Stack direction='row' align='center' gap={2}>
                           <IconButton
                              size='xs'
                              variant='ghost'
                              p={1}
                              as={FaLinkedinIn}
                              color='blanco'
                           />
                           <IconButton
                              size='xs'
                              variant='ghost'
                              p={1}
                              as={RiInstagramFill}
                              color='blanco'
                           />
                           <IconButton
                              size='xs'
                              variant='ghost'
                              p={1}
                              as={IoLogoWhatsapp}
                              color='blanco'
                           />
                        </Stack> */}
                     </Stack>
                  </Stack>
               </Stack>
               <Divider marginBlock={4} />
               <Stack justify='space-between' direction={isMobile ? "column" : "row"}>
                  <Stack gap={0}>
                     <Text color='blanco' fontSize='xs' maxW='80ch'>
                        *Tech Guru S.A. no está vinculada a Hewelett-Packard
                        Company
                     </Text>
                     <Text color='blanco' fontSize='xs' maxW='80ch'>
                        *Tech Guru S.A. no está vinculada a Agilent
                        Technologies, Inc
                     </Text>
                  </Stack>

                  <Text color='blanco' fontSize='xs'>
                     Copyright © 2024 TechGuru
                  </Text>
               </Stack>
            </Stack>
         </Container>
      </Stack>
   );
};

export default Footer;
