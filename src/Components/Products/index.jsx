import { Stack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import products from "./products";
import ProductCard from "./ProductCard";

const ProductList = () => {
   return (
      <Stack paddingBlock='5rem' gap="5rem">
         <Stack
            direction='row'
            position='relative'
            justify='space-between'
            gap='2rem'
         >
            <Stack w='40%' position='sticky' top={10} h='fit-content'>
               <Heading w='fit-content'>
                  Equipos y repuestos reacondicionados
               </Heading>
               <Text>
                  Contamos con amplio stock de repuestos e instrumental
                  analítico reacondicionados por nuestro personal técnico
                  conservando la performance de un instrumental nuevo, pero a un
                  costo más accesible.
               </Text>
            </Stack>
            <SimpleGrid w='60%' columns={2} spacing={10}>
               {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </SimpleGrid>
         </Stack>
         <Stack
            direction='row'
            position='relative'
            justify='space-between'
            gap='2rem'
         >
            <Stack w='40%' position='sticky' top={10} h='fit-content'>
               <Heading w='fit-content'>
                  Respuestos y consumibles originales{" "}
               </Heading>
            </Stack>
            <SimpleGrid w='60%' columns={2} spacing={10}>
               {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default ProductList;
