import { Stack, Heading, Text, Button } from "@chakra-ui/react";

const HeroProducts = () => {
   return (
      <Stack paddingBlock='5rem'>
         <Stack maxW='70ch' gap={5}>
            <Heading>
               Mirá nuestra amplia variedad de productos y repuestos
            </Heading>
            <Text>
               Ofrecemos planes de alquiler de instrumental analítico con opción
               a compra y planes de compra directa con financiación, con una
               garantía extendida de diferentes duraciones.
            </Text>
            <Stack direction='row'>
               <Button>Equipos y repuestos reacondicionados</Button>
               <Button variant='outline'>
                  Respuestos y consumibles originales
               </Button>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default HeroProducts;
