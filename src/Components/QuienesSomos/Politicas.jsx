import {
   Stack,
   Button,
   useMediaQuery,
   Heading,
   SimpleGrid,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa6";

const Politicas = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <SimpleGrid columns={isMobile ? 1 : 2} spacing={5} marginBlock='5rem'>
         <Stack
            bgColor='gray.100'
            padding={5}
            rounded='lg'
            shadow='sm'
            direction={isMobile ? "column" : "row"}
            justify='space-between'
         >
            <Heading size='md' maxW='30ch'>
               Política de Gestión Sostenible
            </Heading>
            <Button
               download
               as='a'
               href='./assets/PDF/POLITICA.pdf'
               leftIcon={<FaDownload />}
            >
               Descargar
            </Button>
         </Stack>
         <Stack
            bgColor='gray.100'
            paddingBlock={5}
            paddingInline={8}
            rounded='lg'
            shadow='sm'
            direction={isMobile ? "column" : "row"}
            justify='space-between'
         >
            {" "}
            <Heading size='md' maxW='30ch'>
               Certificación IRAM - ISO 9001:2015 Sistemas de Gestión de la
               Calidad
            </Heading>
            <Button
               download
               as='a'
               href='./assets/PDF/IRAM.pdf'
               leftIcon={<FaDownload />}
            >
               Descargar
            </Button>
         </Stack>
      </SimpleGrid>
   );
};

export default Politicas;
