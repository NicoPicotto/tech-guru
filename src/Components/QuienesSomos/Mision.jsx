import {
   Stack,
   Heading,
   Text,
   SimpleGrid,
   Icon,
   Divider,
   useMediaQuery
} from "@chakra-ui/react";
import { FaCheck, FaBinoculars, FaPaperPlane } from "react-icons/fa";

const Mision = () => {

   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   const valores = [
      {
         titulo: "Compromiso",
         texto: "Nos comprometemos a ofrecer servicios de la más alta calidad, que no solo satisfagan las necesidades de nuestros clientes, sino que también contribuyan positivamente al bienestar social y ambiental",
         iconValor: FaCheck,
      },
      {
         titulo: "Misión",
         texto: "Brindar soluciones rápidas y confiables a nuestros clientes, asegurando un servicio de la más alta calidad, con el compromiso de impulsar un cambio positivo mediante prácticas comerciales sostenibles, promoviendo la equidad social, el bienestar ambiental y el desarrollo económico inclusivo.",
         iconValor: FaPaperPlane,
      },
      {
         titulo: "Visión",
         texto: "Posicionarnos como empresa líder en el rubro, construyendo relaciones duraderas con nuestros clientes, basadas en nuestros principios éticos y la toma de conciencia de nuestro impacto en la comunidad y medio ambiente.",
         iconValor: FaBinoculars,
      },
   ];

   return (
      <SimpleGrid columns={isMobile ? 1 : 3} spacing={5} marginBottom='4rem'>
         {valores.map((v) => (
            <Stack
               bgColor='gray.100'
               key={v.titulo}
               paddingBlock={5}
               paddingInline={8}
               rounded='lg'
               shadow='sm'
               gap={4}
               transition='0.2s ease'
               _hover={{
                  ".headingValores": {
                     color: "primario",
                  },
                  ".iconValores": {
                     color: "secundario",
                  },
                  transform: "translateY(-3px)",
               }}
            >
               <Stack direction='row' align='center' justify='space-between'>
                  <Heading
                     transition='0.2s ease'
                     className='headingValores'
                     color='negro'
                  >
                     {v.titulo}
                  </Heading>
                  <Icon
                     as={v.iconValor}
                     transition='0.2s ease'
                     className='iconValores'
                     color='gray.500'
                     fontSize='3xl'
                  />
               </Stack>
               <Divider borderColor='gray.400' />
               <Text fontSize='lg' color='negro'>
                  {v.texto}
               </Text>
            </Stack>
         ))}
      </SimpleGrid>
   );
};

export default Mision;
