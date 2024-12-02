import {
   Stack,
   Heading,
   SimpleGrid,
   Text,
   Divider,
   useMediaQuery,
   Image,
   Link,
   Button,
} from "@chakra-ui/react";
import products from "./products";
import ProductCard from "./ProductCard";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link as ReachLink } from "react-router-dom";

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
                  Contamos con una amplia gama de repuestos y consumibles
                  originales para su instrumental analítico
               </Text>
            </Stack>
            <SimpleGrid
               w={isMobile ? "100%" : "60%"}
               columns={isMobile ? 1 : 2}
               spacing={10}
            >
               <Stack
                  rounded='lg'
                  overflow='hidden'
                  shadow='sm'
                  bgColor='gray.100'
                  transition='0.2s ease'
               >
                  <Image
                     aspectRatio={1.5}
                     src='./assets/Productos/repuestos.jpg'
                     alt='Imagen de repuestos genericos'
                  />
                  <Stack p={5} justify='space-between' h='100%'>
                     <Heading size='md'>Amplio stock de respuestos</Heading>
                     {/* <Text>{product.descripcion}</Text> */}
                     <Link
                        as={ReachLink}
                        to='/contacto'
                        state={{
                           prefillMessage: `¡Hola! Estoy interesado en un respuesto ¿Podrían ponerse en contacto conmigo?`,
                        }}
                     >
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
                           Hacé tu consulta
                        </Button>
                     </Link>
                  </Stack>
               </Stack>
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default ProductList;
