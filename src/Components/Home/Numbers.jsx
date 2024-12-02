import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {
   SimpleGrid,
   Stack,
   Text,
   Heading,
   useMediaQuery,
} from "@chakra-ui/react";

const Numbers = () => {
   const clientesRef = useRef(null);
   const mantenimientosRef = useRef(null);
   const experienciaRef = useRef(null);
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   useGSAP(() => {
      const clientes = { value: 0 };
      const mantenimientos = { value: 0 };
      const experiencia = { value: 0 };

      gsap.to(clientes, {
         value: 200,
         duration: 2,
         ease: "power2.out",
         onUpdate: () => {
            clientesRef.current.innerHTML = Math.floor(
               clientes.value
            ).toLocaleString();
         },
         scrollTrigger: {
            trigger: clientesRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
         },
      });

      gsap.to(mantenimientos, {
         value: 2000,
         duration: 2,
         ease: "power2.out",
         onUpdate: () => {
            mantenimientosRef.current.innerHTML = Math.floor(
               mantenimientos.value
            ).toLocaleString();
         },
         scrollTrigger: {
            trigger: mantenimientosRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
         },
      });

      gsap.to(experiencia, {
         value: 10,
         duration: 2,
         ease: "power2.out",
         onUpdate: () => {
            experienciaRef.current.innerHTML = Math.floor(
               experiencia.value
            ).toLocaleString();
         },
         scrollTrigger: {
            trigger: experienciaRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
         },
      });
   });

   return (
      <Stack marginBlock='6rem'>
         <SimpleGrid
            columns={isMobile ? 1 : 3}
            spacing={10}
            position='relative'
         >
            <Stack
               borderRight={isMobile ? "none" : "1px solid"}
               borderColor='primarioDarker'
               align='center'
            >
               <Stack direction='row' align='center' justify='center'>
                  <Heading color='secundario' size='2xl'>
                     +
                  </Heading>
                  <Heading
                     ref={clientesRef}
                     size='4xl'
                     color='primarioDarker'
                     fontWeight={500}
                  >
                     0
                  </Heading>
               </Stack>
               <Text fontSize='xl' color='primarioDarker'>
                  CLIENTES
               </Text>
            </Stack>
            <Stack align='center'>
               <Stack direction='row' align='center' justify='center'>
                  <Heading color='secundario' size='2xl'>
                     +
                  </Heading>
                  <Heading
                     ref={mantenimientosRef}
                     size='4xl'
                     color='primarioDarker'
                     fontWeight={500}
                  >
                     0
                  </Heading>
               </Stack>
               <Text fontSize='xl' color='primarioDarker'>
                  MANTENIMIENTOS REALIZADOS
               </Text>
            </Stack>
            <Stack
               align='center'
               borderLeft={isMobile ? "none" : "1px solid"}
               borderColor='primarioDarker'
            >
               <Stack direction='row' align='center' justify='center'>
                  <Heading color='secundario' size='2xl'>
                     +
                  </Heading>
                  <Heading
                     ref={experienciaRef}
                     size='4xl'
                     color='primarioDarker'
                     fontWeight={500}
                  >
                     0
                  </Heading>
               </Stack>
               <Text fontSize='xl' color='bprimarioDarker'>
                  AÑOS DE EXPERIENCIA
               </Text>
            </Stack>
         </SimpleGrid>
      </Stack>
   );
};

export default Numbers;
