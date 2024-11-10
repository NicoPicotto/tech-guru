import products from "../../Components/Products/products";
import { Link as ReachLink, useParams } from "react-router-dom";
import {
   Stack,
   Heading,
   SimpleGrid,
   Text,
   Icon,
   Divider,
   Image,
   Link,
   Button,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

const ProductDetails = () => {
   const { id } = useParams();

   const product = products.find((item) => item.id === Number(id));

   return (
      <SimpleGrid columns={2} spacing={10}>
         <Image
            rounded='lg'
            shadow='sm'
            src={product.imagen}
            aspectRatio={1}
            alt={product.titulo}
         />
         <Stack>
            <Link as={ReachLink} to='/productos'>
               <Button
                  leftIcon={<IoIosArrowRoundBack />}
                  size='sm'
                  variant='link'
               >
                  Volver a los productos
               </Button>
            </Link>
            <Heading>{product.titulo}</Heading>
            <Text size='lg'>{product.descripcion}</Text>
            <Divider borderColor='gray.400' marginBottom={4} marginTop={4} />
            <Stack gap={4}>
               {product.componentes.map((c, index) => (
                  <Stack key={index} direction='row'>
                     <Icon as={FaCheck} mt={0.5} color='secundario' />
                     <Text>{c}</Text>
                  </Stack>
               ))}
            </Stack>
            <Link
               as={ReachLink}
               to='/contacto'
               state={{
                  prefillMessage: `Hola! Estoy interesado en el producto ${product.titulo}, ¿Podrían ponerse en contacto conmigo?`,
               }}
            >
               <Button mt={4}>Contactarme</Button>
            </Link>
         </Stack>
      </SimpleGrid>
   );
};

export default ProductDetails;
