import { Stack, Heading, Text, Button, Link } from "@chakra-ui/react";

const HeroProducts = () => {
   return (
      <Stack paddingBlock='5rem'>
         <Stack maxW='70ch' gap={5}>
            <Heading size='2xl'>
               Mirá nuestra amplia variedad de productos y repuestos
            </Heading>
            <Text>
               Ofrecemos planes de alquiler de instrumental analítico con opción
               a compra y planes de compra directa con financiación, con una
               garantía extendida de diferentes duraciones.
            </Text>
            <Stack direction='row'>
               <Link as='a' href='#equipos'>
                  <Button>Equipos y repuestos reacondicionados</Button>
               </Link>
               <Link as='a' href='#repuestos'>
                  <Button variant='outline'>
                     Respuestos y consumibles originales
                  </Button>
               </Link>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default HeroProducts;
