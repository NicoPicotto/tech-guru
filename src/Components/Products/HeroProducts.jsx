import {
   Stack,
   Heading,
   Text,
   Button,
   Link,
   SimpleGrid,
   Image,
   useMediaQuery,
} from "@chakra-ui/react";
import heroServices from "/assets/Productos/hero-productos.jpg";

const HeroProducts = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack paddingBottom='4rem' paddingTop='0rem'>
         <SimpleGrid columns={isMobile ? 1 : 2} spacing={10}>
            <Stack gap={5} justify='center'>
               <Heading size={isMobile ? "xl" : "2xl"}>
                  Mirá nuestra amplia variedad de productos y repuestos
               </Heading>
               <Text fontSize='lg'>
               Ofrecemos equipos y repuestos reacondicionados, como así también opciones de alquiler de instrumental analítico con  garantía y opción a compra.
               </Text>
               <Stack direction={isMobile ? "column" : "row"}>
                  <Link as='a' href='#equipos'>
                     <Button>Equipos y repuestos reacondicionados</Button>
                  </Link>
                  <Link as='a' href='#alquiler'>
                     <Button variant='outline'>
                        Alquiler de equipos
                     </Button>
                  </Link>
               </Stack>
            </Stack>
            <Stack align='end' display={isMobile ? "none" : "flex"}>
               <Image
                  src={heroServices}
                  maxW='80%'
                  rounded='lg'
                  style={{
                     clipPath:
                        "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
                  }}
               />
            </Stack>
         </SimpleGrid>
      </Stack>
   );
};

export default HeroProducts;
