import {
   Stack,
   Heading,
   Text,
   Divider,
   Icon,
   SimpleGrid,
} from "@chakra-ui/react";
import { FaGear } from "react-icons/fa6";
import { FaCheckCircle, FaTools } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";
import { IoChatbubbleEllipses } from "react-icons/io5";

const CardsServicios = () => {
   const servicios = [
      {
         title: "Mantenimiento Preventivo",
         description:
            "Procedimientos estipulados por el fabricante para conservar el correcto funcionamiento del instrumental analítico, incluyendo la utilización de partes y consumibles originales.",
         icon: FaGear,
      },
      {
         title: "Asistencias Correctivas",
         description:
            "Asistimos a nuestros clientes en situaciones de falla o anomalías en su instrumental analítico, brindando un soporte técnico profesional, eficiente y económicamente competitivo.",
         icon: FaCheckCircle,
      },
      {
         title: "Calificación de operación",
         description:
            "Verificación de la performance del instrumental analítico, tanto hardware como software, respetando las especificaciones del fabricante.",
         icon: RiEqualizerFill,
      },
      {
         title: "Instalación",
         description:
            "Acompañar a nuestros clientes en la incorporación de nuevo instrumental, cumpliendo con los requerimientos establecidos por el fabricante a fin de garantizar la operatividad de los mismos.",
         icon: FaTools,
      },
      {
         title: "Capacitación",
         description:
            "Acompañamos a nuestros clientes brindando capacitaciones personalizadas acorde a sus necesidades, asesorando en la puesta a punto o calibración de técnicas de trabajo.",
         icon: IoChatbubbleEllipses,
      },
   ];

   return (
      <SimpleGrid columns={5} spacing={5}>
         {servicios.map((service) => (
            <Stack
               key={service.title}
               border='2px solid'
               shadow='md'
               borderRadius={5}
               borderColor='primario'
               p={4}
               gap={4}
               transition='0.1s ease'
               _hover={{
                  bgColor: "primario",
                  color: "blanco",
                  transform: "translateY(-10px)",
                  ".icon": { color: "blanco" },
                  ".divider": { borderColor: "blanco" },
               }}
            >
               <Icon
                  className='icon'
                  color='primario'
                  as={service.icon}
                  fontSize='4xl'
               />
               <Stack minH='50px'>
                  <Heading size='md'>{service.title}</Heading>
               </Stack>

               <Divider className='divider' borderColor='primario' />
               <Text textWrap='pretty'>{service.description}</Text>
            </Stack>
         ))}
      </SimpleGrid>
   );
};

export default CardsServicios;
