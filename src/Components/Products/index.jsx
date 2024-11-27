import {
   Stack,
   Heading,
   SimpleGrid,
   Text,
   Divider,
   useMediaQuery,
} from "@chakra-ui/react";
import products from "./products";
import ProductCard from "./ProductCard";

const ProductList = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack paddingBlock='5rem' gap='5rem'>
         <Stack
            direction={isMobile ? "column" : "row"}
            position='relative'
            justify='space-between'
            gap='2rem'
            id='equipos'
         >
            <Stack
               w={isMobile ? "100%" : "40%"}
               position={isMobile ? "static" : "sticky"}
               top='8rem'
               h='fit-content'
               bgColor='primario'
               paddingBlock={5}
               paddingInline={8}
               rounded='lg'
               shadow='sm'
               gap={3}
            >
               <Heading color='blanco' fontSize='3xl'>
                  Equipos y repuestos reacondicionados
               </Heading>
               <Divider />
               <Text color='blanco'>
                  Contamos con amplio stock de repuestos e instrumental
                  analítico reacondicionados por nuestro personal técnico
                  conservando la performance de un instrumental nuevo, pero a un
                  costo más accesible.
               </Text>
            </Stack>
            <SimpleGrid
               w={isMobile ? "100%" : "60%"}
               columns={isMobile ? 1 : 2}
               spacing={10}
            >
               {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </SimpleGrid>
         </Stack>
         <Stack
            direction={isMobile ? "column" : "row"}
            position='relative'
            justify='space-between'
            gap='2rem'
         >
            <Stack
               w={isMobile ? "100%" : "40%"}
               position={isMobile ? "static" : "sticky"}
               top='8rem'
               h='fit-content'
               id='repuestos'
               bgColor='primario'
               paddingBlock={5}
               paddingInline={8}
               rounded='lg'
               shadow='sm'
               gap={3}
            >
               <Heading color='blanco' fontSize='3xl'>
                  Respuestos y consumibles originales{" "}
               </Heading>
               <Divider />
               <Text color='blanco'>
                  Contamos con amplio stock de repuestos e instrumental
                  analítico reacondicionados por nuestro personal técnico
                  conservando la performance de un instrumental nuevo, pero a un
                  costo más accesible.
               </Text>
            </Stack>
            <SimpleGrid
               w={isMobile ? "100%" : "60%"}
               columns={isMobile ? 1 : 2}
               spacing={10}
            >
               {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default ProductList;
