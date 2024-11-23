/* eslint-disable react/prop-types */
import { Stack, Image, Text, Link, Heading, Button } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProductCard = ({ product }) => {
   return (
      <Stack
         rounded='lg'
         overflow='hidden'
         shadow='sm'
         bgColor='gray.100'
         transition='0.2s ease'
      >
         <Image aspectRatio={1.5} src={product.imagen} alt={product.titulo} />
         <Stack p={5} justify='space-between' h='100%'>
            <Heading size='md'>{product.titulo}</Heading>
            {/* <Text>{product.descripcion}</Text> */}
            <Link as={ReachLink} to={`/productos/${product.id}`}>
               <Button
                  rightIcon={
                     <IoIosArrowRoundForward
                        className='arrow'
                        fontSize='1.2rem'
                     />
                  }
                  variant='arrow'
                  mt='2'
               >
                  Ver detalles
               </Button>
            </Link>
         </Stack>
      </Stack>
   );
};

export default ProductCard;
