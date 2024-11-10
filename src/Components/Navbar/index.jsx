import {
   Stack,
   Button,
   Link,
   Image,
   useDisclosure,
   Icon,
   useMediaQuery,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import NavMobile from "./NavMobile";
import logo from "/assets/logo.svg";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   return (
      <Stack
         p='1.5rem 2rem'
         align='center'
         zIndex={100}
         position='sticky'
         top={0}
      >
         <Stack
            maxW='80rem'
            w='100%'
            direction='row'
            align='center'
            justify='space-between'
            bgColor='primarioDarker'
            shadow='md'
            paddingBlock={5}
            rounded='lg'
            paddingInline={5}
            transition='0.2s ease'
         >
            <Stack>
               <Link as={ReachLink} to='/'>
                  <Image
                     w={isMobile ? "2.5rem" : "5rem"}
                     src={logo}
                     filter='brightness(10)'
                     alt='Logo de Conectar'
                  />
               </Link>
            </Stack>
            {!isMobile && (
               <Stack direction='row' gap='3rem' align='center'>
                  <Link as={ReachLink} to='/quienes-somos'>
                     <Button
                        variant='link'
                        aria-label='Ir a la sección Nosotros'
                        color='blanco'
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
                  {/* <Link as={ReachLink} to='/clientes'>
                     <Button
                        aria-label='Ir a la sección Clientes'
                        variant='link'
                     >
                        Clientes
                     </Button>
                  </Link> */}
                  <Link as={ReachLink} to='/contacto'>
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
                        Contacto
                     </Button>
                  </Link>
               </Stack>
            )}

            {isMobile && (
               <Icon
                  variant='ghost'
                  className='menu-icon'
                  as={RiMenu3Fill}
                  fontSize='1.5rem'
                  onClick={onOpen}
                  bgColor='transparent'
                  _hover={{ bgColor: "transparent" }}
               />
            )}

            <NavMobile onClose={onClose} isOpen={isOpen} />
         </Stack>
      </Stack>
   );
};

export default Navbar;
