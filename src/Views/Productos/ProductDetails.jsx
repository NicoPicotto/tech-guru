import Container from "../../Components/Commons/Container/Container";
import { Stack, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import products from "../../Components/Products/products";
import { useParams } from "react-router-dom";

const ProductDetailsView = () => {
   const { id } = useParams();

   const product = products.find((item) => item.id === Number(id));

   console.log(product);

   return (
      <Container>
         <Heading>{product.titulo}</Heading>
      </Container>
   );
};

export default ProductDetailsView;
