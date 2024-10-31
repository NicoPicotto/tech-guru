import { Stack, Text, Heading, Icon } from "@chakra-ui/react";
import "./reacondicionados.css";

const Reacondicionados = () => {
   return (
      <Stack
         className='reacondicionados'
         bgColor='primario'
         paddingBlock='5rem'
         align='center'
      >
         <Stack maxW='50rem' w='100%' align='center' gap={5}>
            <Heading size='lg' color='blanco'>
               ¿Por qué comprar equipos reacondicionados?
            </Heading>
            <Text textAlign='center' color='blanco'>
               Al comprar equipos reacondicionados, se le da una segunda vida a
               dispositivos que de lo contrario podrían haber sido descartados
               prematuramente. Esto ayuda a reducir la demanda de recursos
               naturales para la fabricación de nuevos dispositivos, así como la
               energía y los materiales necesarios para su producción. Además,
               al extender la vida útil de los equipos, se reduce la cantidad de
               desechos electrónicos generados.
            </Text>
         </Stack>
      </Stack>
   );
};

export default Reacondicionados;
