import {
   Stack,
   Text,
   Heading,
   Icon,
   StackDivider,
   useMediaQuery,
} from "@chakra-ui/react";
import "./reacondicionados.css";
import { FaCheck } from "react-icons/fa";

const Reacondicionados = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <>
         <Stack
            gap={0}
            bgColor='gray.100'
            paddingBlock={5}
            paddingInline={8}
            rounded='lg'
            shadow='sm'
            marginBottom='4rem'
         >
            <Stack
               direction={isMobile ? "column" : "row"}
               justify='space-between'
               align={isMobile ? "left" : "center"}
               gap='2rem'
               divider={<StackDivider borderColor='gray.300' />}
            >
               <Stack gap={4} w={isMobile ? "100%" : "60%"}>
                  <Heading>¿Por qué comprar equipos reacondicionados?</Heading>
                  <Text>
                     {" "}
                     Al comprar equipos reacondicionados, se le da una segunda
                     vida a dispositivos que de lo contrario podrían haber sido
                     descartados prematuramente. Esto ayuda a reducir la demanda
                     de recursos naturales para la fabricación de nuevos
                     dispositivos, así como la energía y los materiales
                     necesarios para su producción. Además, al extender la vida
                     útil de los equipos, se reduce la cantidad de desechos
                     electrónicos generados.
                  </Text>
               </Stack>
               <Stack gap={4} w={isMobile ? "100%" : "40%"}>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='secundario' />
                     <Text>Cuentan con garantía.</Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='secundario' />
                     <Text>Soporte técnico especializado.</Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='secundario' />
                     <Text>Capacitaciones en el uso de los equipos.</Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='secundario' />
                     <Text>
                        Precios hasta un 50% menos que un equipo nuevo.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='secundario' />
                     <Text>
                        Primer servicio de mantenimiento preventivo bonificado.
                     </Text>
                  </Stack>
               </Stack>
            </Stack>
         </Stack>
      </>
   );
};

export default Reacondicionados;
