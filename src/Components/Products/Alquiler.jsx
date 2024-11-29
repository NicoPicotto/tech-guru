import {
   Stack,
   Text,
   Heading,
   Icon,
   StackDivider,
   useMediaQuery,
   SimpleGrid,
} from "@chakra-ui/react";
import "./reacondicionados.css";
import { FaCheck } from "react-icons/fa";

const Alquiler = () => {
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
            id='alquiler'
         >
            <Stack
               direction='column'
               justify='space-between'
               align={isMobile ? "left" : "top"}
               gap='2rem'
               divider={<StackDivider borderColor='gray.300' />}
            >
               <Stack gap={4}>
                  <Heading>Alquiler de equipos</Heading>
                  <Text>
                     {" "}
                     Alquilar equipos de laboratorio ofrece varias ventajas
                     tanto para empresas como instituciones educativas.
                  </Text>
               </Stack>
               <SimpleGrid columns={isMobile ? 1 : 4} spacing={10}>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='secundario' />
                     <Stack>
                        <Heading size='md'>
                           Reducción de costos iniciales
                        </Heading>
                        <Text>
                           Al alquilar, las empresas e instituciones no tienen
                           que hacer una gran inversión inicial en la compra de
                           equipos costosos. Esto es especialmente útil para
                           proyectos con presupuestos limitados o para equipos
                           que solo se necesitan de manera temporal.
                        </Text>
                     </Stack>
                  </Stack>
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='secundario' />
                     <Stack>
                        <Heading size='md'>
                           Mantenimiento y soporte técnico incluidos
                        </Heading>
                        <Text>
                           Los contratos de alquiler incluyen el mantenimiento
                           preventivo y calificación operativa, así como el
                           soporte técnico. Esto elimina la necesidad de
                           contratar personal especializado para mantener el
                           equipo.
                        </Text>
                     </Stack>
                  </Stack>{" "}
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='secundario' />
                     <Stack>
                        <Heading size='md'>Flexibilidad</Heading>
                        <Text>
                           Se puede alquilar el equipo por el tiempo que
                           realmente se necesita (días, meses o incluso años),
                           lo cual permite adaptarse mejor a los plazos y
                           requerimientos específicos de un proyecto.
                        </Text>
                     </Stack>
                  </Stack>{" "}
                  <Stack direction='row'>
                     <Icon as={FaCheck} color='secundario' />
                     <Stack>
                        <Heading size='md'>Opción a compra</Heading>
                        <Text>
                           Una vez completado el período de alquiler, la empresa
                           puede optar por la opción de compra del equipo,
                           reduciendo el costo de la inversión.
                        </Text>
                     </Stack>
                  </Stack>
               </SimpleGrid>
            </Stack>
         </Stack>
      </>
   );
};

export default Alquiler;
