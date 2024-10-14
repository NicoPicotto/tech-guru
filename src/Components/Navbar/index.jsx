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
      <Stack p='1.5rem 2rem' align='center' zIndex={100}>
         <Stack
            maxW='80rem'
            w='100%'
            direction='row'
            align='center'
            justify='space-between'
         >
            <Stack>
               <Link as={ReachLink} to='/'>
                  <Image
                     w={isMobile ? "2.5rem" : "5rem"}
                     src={logo}
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
                     >
                        Quienes Somos
                     </Button>
                  </Link>
                  <Link as={ReachLink} to='/servicios'>
                     <Button
                        aria-label='Ir a la sección Servicios'
                        variant='link'
                     >
                        Servicios
                     </Button>
                  </Link>

                  <Link as={ReachLink} to='/productos'>
                     <Button
                        aria-label='Ir a la sección Productos'
                        variant='link'
                     >
                        Productos
                     </Button>
                  </Link>
                  <Link as={ReachLink} to='/contacto'>
                     <Button
                        aria-label='Ir a la sección Contacto'
                        variant='outline'
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
