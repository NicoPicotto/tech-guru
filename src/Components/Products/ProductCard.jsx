/* eslint-disable react/prop-types */
import { Stack, Image, Text, Link, Heading } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
   return (
      <Stack>
         <Image aspectRatio={1} src={product.imagen} alt={product.titulo} />
         <Heading>{product.titulo}</Heading>
         <Text>{product.descripcion}</Text>
      </Stack>
   );
};

export default ProductCard;
