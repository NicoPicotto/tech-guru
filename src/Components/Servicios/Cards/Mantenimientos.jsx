import {
   Stack,
   Heading,
   Text,
   Icon,
   SimpleGrid,
   Divider,
   Button,
   Link,
   useMediaQuery,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { FaCheck, FaWindowClose } from "react-icons/fa";

const Mantenimientos = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack
         gap={0}
         bgColor='gray.100'
         paddingBlock={5}
         paddingInline={8}
         rounded='lg'
         shadow='sm'
         mb='4rem'
      >
         <Stack direction={isMobile ? "column" : "row"}>
            <Heading minW='60%' size={isMobile ? "lg" : "xl"}>
               ¿Cuál es la modalidad de Soporte Técnico más conveniente para su
               laboratorio?
            </Heading>
            <Stack gap={5}>
               <Text fontSize='lg'>
                  ¿Costo anual fijo o variable? ¿Podría necesitar préstamo de
                  equipos? ¿O solicitar servicios urgentes?
               </Text>
               <Text fontSize='lg'>
                  Cada laboratorio tiene distintas necesidades. Conozca las
                  diferencias entre la modalidad <Text as='i'>Standard</Text>{" "}
                  (por evento), y los servicios que brindamos mediante Contratos
                  de Soporte.
               </Text>
            </Stack>
         </Stack>
         <Divider borderColor='gray.400' marginBlock={10} />
         <SimpleGrid columns={isMobile ? 1 : 2} spacing={10}>
            <Stack
               bgColor='gray.200'
               paddingBlock={5}
               paddingInline={8}
               rounded='lg'
               shadow='sm'
               border='2px solid #0076b4'
            >
               <Heading size='lg' textAlign='center'>
                  Standard
               </Heading>
               <Divider borderColor='primario' marginBlock={2} />
               <Stack gap={3}>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Reparaciones on site
                        </span>{" "}
                        (visitas por desperfectos técnicos).
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Mantenimientos Preventivos
                        </span>{" "}
                        (Incluyen los consumibles necesarios).
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Calificación de operación (OQ/PV)
                        </span>{" "}
                        según lineamientos del fabricante.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Soporte telefónico
                        </span>{" "}
                        con nuestros Ingenieros de Soporte Técnico.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>Garantía</span>{" "}
                        sobre los servicios.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Reparaciones en Bench
                        </span>{" "}
                        para desperfectos que requieran más tiempo de prueba.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Taller de Electrónica
                        </span>{" "}
                        disponible para reparaciones de placas y módulos.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text fontWeight='bold'>
                        Cobertura en toda la Argentina.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Calibraciones trazables
                        </span>{" "}
                        a organismos reconocidos.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaWindowClose} color='red.600' />
                     <Text opacity={0.5}>
                        <span style={{ fontWeight: "bold" }}>
                           Tiempo de respuesta prioritario
                        </span>{" "}
                        (24hs en casos de urgencia).
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaWindowClose} color='red.600' />
                     <Text opacity={0.5}>
                        <span style={{ fontWeight: "bold" }}>
                           Recalificación post reparación
                        </span>{" "}
                        cuando la misma pueda afectar los resultados.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaWindowClose} color='red.600' />
                     <Text opacity={0.5}>
                        <span style={{ fontWeight: "bold" }}>
                           Préstamo de módulos y equipos
                        </span>{" "}
                        cuando no es posible la reparación inmediata.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaWindowClose} color='red.600' />
                     <Text opacity={0.5} fontWeight='bold'>
                        Prioridad en acceso al stock.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaWindowClose} color='red.600' />
                     <Text opacity={0.5}>
                        <span style={{ fontWeight: "bold" }}>
                           Coordinación inmediata
                        </span>{" "}
                        sin necesidad de envío de órdenes de compra.
                     </Text>
                  </Stack>
                  <Link
                     as={ReachLink}
                     to='/contacto'
                     mt={5}
                     state={{
                        prefillMessage: `Hola! Estoy interesado en el mantenimiento Standard, ¿Podrían ponerse en contacto conmigo?`,
                     }}
                  >
                     <Button
                        w='100%'
                        whiteSpace={isMobile && "wrap"}
                        p={isMobile && 8}
                     >
                        Contactarme por este mantenimiento
                     </Button>
                  </Link>
               </Stack>
            </Stack>
            <Stack
               bgColor='gray.200'
               paddingBlock={5}
               paddingInline={8}
               rounded='lg'
               shadow='sm'
               border='2px solid #0076b4'
            >
               <Heading size='lg' textAlign='center'>
                  Contrato
               </Heading>
               <Divider borderColor='primario' marginBlock={2} />
               <Stack gap={3}>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Reparaciones on site
                        </span>{" "}
                        (visitas por desperfectos técnicos).
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Mantenimientos Preventivos
                        </span>{" "}
                        (Incluyen los consumibles necesarios).
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Calificación de operación (OQ/PV)
                        </span>{" "}
                        según lineamientos del fabricante.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Soporte telefónico
                        </span>{" "}
                        con nuestros Ingenieros de Soporte Técnico.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>Garantía</span>{" "}
                        sobre los servicios.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Reparaciones en Bench
                        </span>{" "}
                        para desperfectos que requieran más tiempo de prueba.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Taller de Electrónica
                        </span>{" "}
                        disponible para reparaciones de placas y módulos.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text fontWeight='bold'>
                        Cobertura en toda la Argentina.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Calibraciones trazables
                        </span>{" "}
                        a organismos reconocidos.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Tiempo de respuesta prioritario
                        </span>{" "}
                        (24hs en casos de urgencia).
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Recalificación post reparación
                        </span>{" "}
                        cuando la misma pueda afectar los resultados.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Préstamo de módulos y equipos
                        </span>{" "}
                        cuando no es posible la reparación inmediata.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text fontWeight='bold'>
                        Prioridad en acceso al stock.
                     </Text>
                  </Stack>
                  <Stack direction='row'>
                     <Icon mt={1} as={FaCheck} color='secundario' />
                     <Text>
                        <span style={{ fontWeight: "bold" }}>
                           Coordinación inmediata
                        </span>{" "}
                        sin necesidad de envío de órdenes de compra.
                     </Text>
                  </Stack>
                  <Link
                     as={ReachLink}
                     mt={5}
                     to='/contacto'
                     state={{
                        prefillMessage: `Hola! Estoy interesado en el mantenimiento por Contrato, ¿Podrían ponerse en contacto conmigo?`,
                     }}
                  >
                     <Button
                        w='100%'
                        whiteSpace={isMobile && "wrap"}
                        p={isMobile && 8}
                     >
                        Contactarme por este mantenimiento
                     </Button>
                  </Link>
               </Stack>
            </Stack>
         </SimpleGrid>
      </Stack>
   );
};

export default Mantenimientos;
