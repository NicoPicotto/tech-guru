import {
   Stack,
   Text,
   Heading,
   Icon,
   SimpleGrid,
   Divider,
} from "@chakra-ui/react";
import "./reacondicionados.css";
import { FaCheck } from "react-icons/fa";
import Container from "../Commons/Container/Container";

const Reacondicionados = () => {
   return (
      <Stack
         className='reacondicionados'
         bgColor='primario'
         paddingBlock='5rem'
         align='center'
      >
         <Container>
            <Stack maxW='90ch' gap={5}>
               <Heading textAlign='center' color='blanco'>
                  ¿Por qué comprar equipos reacondicionados?
               </Heading>
               <Text textAlign='center' color='blanco'>
                  Al comprar equipos reacondicionados, se le da una segunda vida
                  a dispositivos que de lo contrario podrían haber sido
                  descartados prematuramente. Esto ayuda a reducir la demanda de
                  recursos naturales para la fabricación de nuevos dispositivos,
                  así como la energía y los materiales necesarios para su
                  producción. Además, al extender la vida útil de los equipos,
                  se reduce la cantidad de desechos electrónicos generados.
               </Text>
               <Divider />
               <SimpleGrid columns={2} spacing={4}>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='white' />
                     <Text fontSize='sm' color='blanco'>
                        Cuentan con garantía.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='white' />
                     <Text fontSize='sm' color='blanco'>
                        Soporte técnico especializado.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='white' />
                     <Text fontSize='sm' color='blanco'>
                        Capacitaciones en el uso de los equipos.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='white' />
                     <Text fontSize='sm' color='blanco'>
                        Precios hasta un 50% menos que un equipo nuevo.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='white' />
                     <Text fontSize='sm' color='blanco'>
                        Primer servicio de mantenimiento preventivo bonificado.
                     </Text>
                  </Stack>
               </SimpleGrid>
            </Stack>
         </Container>
      </Stack>
   );
};

export default Reacondicionados;
