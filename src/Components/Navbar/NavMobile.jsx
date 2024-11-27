/* eslint-disable react/prop-types */

import {
   Drawer,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   DrawerBody,
   Link,
   Button,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const NavMobile = ({ onClose, isOpen }) => {
   return (
      <Drawer onClose={onClose} isOpen={isOpen} size='full'>
         <DrawerOverlay />
         <DrawerContent bgColor='primarioDarker'>
            <DrawerCloseButton
               color='blanco'
               fontSize='1rem'
               margin='2rem'
               aria-label='Cerrar navegación'
               _focusVisible={false}
            />
            <DrawerBody
               h='100%'
               alignItems='center'
               display='flex'
               justifyContent='center'
               flexDir='column'
               gap='3em'
            >
               <Link as={ReachLink} to='/' onClick={onClose}>
                  <Button
                     textDecor='underline'
                     bgColor='transparent'
                     variant='link'
                     color='blanco'
                     fontSize='2xl'
                     aria-label='Ir a la sección Inicio'
                     textUnderlineOffset={4}
                     textDecorationColor='azul'
                  >
                     Inicio
                  </Button>
               </Link>
               <Link as={ReachLink} to='/quienes-somos' onClick={onClose}>
                  <Button
                     textDecor='underline'
                     bgColor='transparent'
                     variant='link'
                     color='blanco'
                     fontSize='2xl'
                     aria-label='Ir a la sección Quienes Somos'
                     textUnderlineOffset={4}
                     textDecorationColor='azul'
                  >
                     Quienes Somos
                  </Button>
               </Link>
               <Link as={ReachLink} to='/servicios' onClick={onClose}>
                  <Button
                     textDecor='underline'
                     bgColor='transparent'
                     variant='link'
                     color='blanco'
                     fontSize='2xl'
                     aria-label='Ir a la sección Servicios'
                     textUnderlineOffset={4}
                     textDecorationColor='azul'
                  >
                     Servicios
                  </Button>
               </Link>

               <Link as={ReachLink} to='/productos' onClick={onClose}>
                  <Button
                     textDecor='underline'
                     bgColor='transparent'
                     variant='link'
                     color='blanco'
                     fontSize='2xl'
                     aria-label='Ir a la sección Productos'
                     textUnderlineOffset={4}
                     textDecorationColor='azul'
                  >
                     Productos
                  </Button>
               </Link>

               <Link as={ReachLink} to='/contacto' onClick={onClose}>
                  <Button
                     textDecor='underline'
                     bgColor='transparent'
                     variant='link'
                     color='blanco'
                     fontSize='2xl'
                     aria-label='Ir a la sección Contacto'
                     textUnderlineOffset={4}
                     textDecorationColor='azul'
                  >
                     Contacto
                  </Button>
               </Link>
            </DrawerBody>
         </DrawerContent>
      </Drawer>
   );
};

export default NavMobile;
