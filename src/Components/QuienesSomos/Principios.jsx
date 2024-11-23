import { Stack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const Principios = () => {
   const [hoveredIndex, setHoveredIndex] = useState(null);

   const principios = [
      {
         title: "Enfoque en el Cliente",
         description:
            "Mantenemos un compromiso constante con la satisfacción de nuestros clientes, escuchando sus necesidades y mejorando continuamente nuestros servicios para exceder sus expectativas",
      },
      {
         title: "Mejora Contínua",
         description:
            "Implementamos un sistema de gestión de calidad basado en la Norma ISO 9001:2015, que fomenta la mejora continua en todos nuestros procesos y prácticas, integrando indicadores de desempeño que contemplen el impacto social y ambiental.",
      },
      {
         title: "Responsabilidad Social",
         description:
            "Nos comprometemos a actuar de manera ética, promoviendo prácticas que beneficien a nuestras comunidades y a la sociedad en general. Esto incluye la promoción de relaciones justas con nuestros empleados, proveedores y clientes.",
      },
      {
         title: "Sostenibilidad Ambiental",
         description:
            "Adoptamos prácticas que minimizan nuestro impacto ambiental. Esto incluye el uso eficiente de recursos, la reducción de residuos, y la implementación de procesos que favorezcan la sostenibilidad a lo largo de nuestra cadena de valor.",
      },
      {
         title: "Transparencia y Comunicación",
         description:
            "Fomentamos una comunicación clara y efectiva con nuestros clientes, empleados y partes interesadas sobre nuestras prácticas de calidad, así como sobre nuestros esfuerzos y logros en responsabilidad social y sostenibilidad.",
      },
   ];
   return (
      <Stack
         gap={0}
         bgColor='gray.100'
         paddingBlock={5}
         paddingInline={8}
         rounded='lg'
         shadow='sm'
      >
         {principios.map((p, index) => (
            <Stack
               direction='row'
               key={p.title}
               index={index}
               borderBottom='1px solid'
               borderColor='negro'
               paddingBlock='2rem'
               gap={8}
               justify='space-between'
               onMouseEnter={() => setHoveredIndex(index)}
               _hover={{ ".headingPrincipios": { color: "primario" } }}
               onMouseLeave={() => setHoveredIndex(null)}
               style={{
                  filter:
                     hoveredIndex !== null && hoveredIndex !== index
                        ? "blur(3px)"
                        : "none",
                  transition: "filter 0.3s ease",
               }}
            >
               <Heading
                  className='headingPrincipios'
                  color='negro'
                  minW='40%'
                  transition='0.3s ease'
                  h='fit-content'
               >
                  {p.title}
               </Heading>

               <Text fontSize='lg'>{p.description}</Text>
            </Stack>
         ))}
      </Stack>
   );
};

export default Principios;
