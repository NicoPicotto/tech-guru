/* eslint-disable react/prop-types */
import { Stack, Image, Text, Link, Heading, Button } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProductCard = ({ product }) => {
   return (
      <Stack
         border='2px solid'
         borderColor='gray.300'
         rounded='lg'
         overflow='hidden'
         shadow='sm'
         bgColor="white"
         transition='0.2s ease'
         _hover={{
            borderColor: "primario",
            transform: "translateY(-2px)",
            shadow: "md",
         }}
      >
         <Image aspectRatio={1.5} src={product.imagen} alt={product.titulo} />
         <Stack padding={5} paddingTop={3}>
            <Heading size='md'>{product.titulo}</Heading>
            <Text fontSize='sm'>{product.descripcion}</Text>
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
                  size='sm'
               >
                  Ver detalles
               </Button>
            </Link>
         </Stack>
      </Stack>
   );
};

export default ProductCard;
