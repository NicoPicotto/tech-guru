import { useState } from "react";
import {
   Stack,
   Heading,
   Text,
   Button,
   SimpleGrid,
   FormControl,
   FormLabel,
   Input,
   Textarea,
   Spinner,
   useMediaQuery,
} from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isError, setIsError] = useState(false);
   const location = useLocation();
   const prefillMessage = location.state?.prefillMessage || "";

   const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      try {
         const response = await fetch("https://techguru.com.ar/sendEmail.php", {
            method: "POST",
            body: formData,
            mode: "cors",
         });

         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }

         const contentType = response.headers.get("content-type");
         if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't got JSON!");
         }

         const result = await response.json();

         if (result.success) {
            setIsSubmitted(true);
            setIsSubmitting(false);
         } else {
            setIsError(true);
            setIsSubmitting(false);
         }
      } catch (error) {
         console.error("Error:", error);
         setIsError(true);
         setIsSubmitting(false);
      }
   };

   const handleCalendlyClick = () => {
      window.Calendly.initPopupWidget({
         url: "https://calendly.com/techgurusa/entrevista", // URL del evento de Calendly
      });
      return false;
   };

   return (
      <Stack paddingBottom='4rem'>
         <SimpleGrid columns={isMobile ? 1 : 2} spacing={10}>
            <Stack gap={5} justify='start'>
               <Heading size='2xl'>
                  Contáctenos y nuestros especialistas le brindarán la mejor
                  atención.
               </Heading>
               <Text fontSize='lg'>
                  También podés agendar tu entrevista directamente según tu
                  disponibilidad haciendo{" "}
                  <Button variant='link' onClick={handleCalendlyClick}>
                     click aquí
                  </Button>
                  .
               </Text>
            </Stack>

            <Stack as='form' onSubmit={handleSubmit}>
               <SimpleGrid columns={isMobile ? 1 : 2} spacing={3}>
                  <FormControl>
                     <FormLabel fontSize='sm'>Nombre y apellido</FormLabel>
                     <Input
                        borderColor='gray.400'
                        bgColor='gray.100'
                        type='text'
                        name='nombre'
                        placeholder='Juan Pérez'
                        focusBorderColor='primario'
                     />
                  </FormControl>
                  <FormControl>
                     <FormLabel fontSize='sm'>Nombre de la empresa</FormLabel>
                     <Input
                        borderColor='gray.400'
                        bgColor='gray.100'
                        type='text'
                        name='empresa'
                        placeholder='Empresa SA'
                        focusBorderColor='primario'
                     />
                  </FormControl>
                  <FormControl>
                     <FormLabel fontSize='sm'>Correo electrónico</FormLabel>
                     <Input
                        borderColor='gray.400'
                        bgColor='gray.100'
                        type='text'
                        name='email'
                        placeholder='juanperez@gmail.com'
                        focusBorderColor='primario'
                     />
                  </FormControl>
                  <FormControl>
                     <FormLabel fontSize='sm'>Número de teléfono</FormLabel>
                     <Input
                        borderColor='gray.400'
                        bgColor='gray.100'
                        type='number'
                        name='telefono'
                        placeholder='3514123456'
                        focusBorderColor='primario'
                     />
                  </FormControl>
               </SimpleGrid>
               <FormControl>
                  <FormLabel fontSize='sm'>Mensaje</FormLabel>
                  <Textarea
                     borderColor='gray.400'
                     bgColor='gray.100'
                     type='text'
                     value={prefillMessage}
                     name='mensaje'
                     placeholder='¡Hola amigos de TechGurú!'
                     focusBorderColor='primario'
                  />
               </FormControl>
               {!isSubmitted ? (
                  <Button
                     mt={2}
                     type='submit'
                     variant='arrow'
                     aria-label='Enviar mensaje'
                     disabled={isSubmitting}
                     rightIcon={
                        <IoIosArrowRoundForward
                           className='arrow'
                           fontSize='1.2rem'
                        />
                     }
                  >
                     {isSubmitting ? <Spinner size='sm' /> : "Enviar mensaje"}
                  </Button>
               ) : (
                  <Text color='blanco' fontWeight='bold'>
                     Mensaje enviado, pronto nos pondremos en contacto.
                  </Text>
               )}
               {isError && (
                  <Text color='red' fontWeight='bold'>
                     Ocurrió un error al enviar el mensaje. Por favor, intenta
                     nuevamente.
                  </Text>
               )}
            </Stack>
         </SimpleGrid>
      </Stack>
   );
};

export default ContactForm;
