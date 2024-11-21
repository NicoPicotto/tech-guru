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
         duration: 3,
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
         value: 500,
         duration: 3,
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
      <Stack
         bgColor='primarioDarker'
         paddingBlock={10}
         paddingInline={8}
         rounded='lg'
      >
         <SimpleGrid columns={3} spacing={10} position='relative'>
            <Stack
               borderRight='1px solid'
               borderColor='gray.100'
               align='center'
            >
               <Stack direction='row' align='center' justify='center'>
                  <Heading color='blanco' size='2xl'>
                     +
                  </Heading>
                  <Heading
                     ref={clientesRef}
                     size='4xl'
                     color='white'
                     fontWeight={500}
                  >
                     0
                  </Heading>
               </Stack>
               <Text fontSize='xl' color='blanco'>
                  CLIENTES
               </Text>
            </Stack>
            <Stack
               
               align='center'
            >
               <Stack direction='row' align='center' justify='center'>
                  <Heading color='blanco' size='2xl'>
                     +
                  </Heading>
                  <Heading
                     ref={mantenimientosRef}
                     size='4xl'
                     color='white'
                     fontWeight={500}
                  >
                     0
                  </Heading>
               </Stack>
               <Text fontSize='xl' color='blanco'>
                  MANTENIMIENTOS REALIZADOS
               </Text>
            </Stack>
            <Stack align='center' borderLeft='1px solid'
               borderColor='gray.100'>
               <Stack direction='row' align='center' justify='center'>
                  <Heading color='blanco' size='2xl'>
                     +
                  </Heading>
                  <Heading
                     ref={experienciaRef}
                     size='4xl'
                     color='white'
                     fontWeight={500}
                  >
                     0
                  </Heading>
               </Stack>
               <Text fontSize='xl' color='blanco'>
                  AÑOS DE EXPERIENCIA
               </Text>
            </Stack>
         </SimpleGrid>
      </Stack>
   );
};

export default Numbers;
