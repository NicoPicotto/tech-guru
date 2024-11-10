import {
   Stack,
   Image,
   Text,
   Link,
   Divider,
   Heading,
   Button,
   IconButton,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import Container from "../Commons/Container/Container";
import logo from "/assets/logo.svg";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
   return (
      <Stack bgColor='primarioDarker'>
         <Container>
            <Stack paddingTop='2rem'>
               <Stack justify='space-between' direction='row'>
                  <Link as={ReachLink} to='/'>
                     <Image
                        src={logo}
                        filter='brightness(10)'
                        alt='Logo de TechGuru'
                        h='100px'
                     />
                  </Link>
                  <Stack direction='row' gap={20}>
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
                           Calle Falsa 123, General Deheza, Córdoba.
                        </Text>
                        <Text color='blanco'>(0358) 155123456</Text>
                        <Text color='blanco'>info@techguru.com.ar</Text>
                        <Stack direction='row' align='center' gap={2}>
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
                        </Stack>
                     </Stack>
                  </Stack>
               </Stack>
               <Divider marginBlock={4} />
               <Stack justify='space-between' direction='row'>
                  <Text color='blanco' fontSize='xs' maxW='80ch'>
                     *AGILENT®, Chemstation® y Varian® son propiedad de Agilent
                     Technologies, Inc. TECHGURU S.A. no está vinculada a
                     Agilent Technologies, Inc. Hewlett Packard® es propiedad de
                     Hewlett-Packard Company. TECHGURU S.A. no está vinculada a
                     Hewlett-Packard Company.
                  </Text>
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
