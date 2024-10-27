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
   Icon,
} from "@chakra-ui/react";
import { SiCalendly } from "react-icons/si";

const ContactForm = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isError, setIsError] = useState(false);

   const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      try {
         const response = await fetch("https://conectar-gd.com/sendEmail.php", {
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
      <Stack>
         <Heading>Esperamos tu mensaje</Heading>
         <SimpleGrid columns={2} spacing={5}>
            <Stack mt={5} as='form' onSubmit={handleSubmit}>
               <SimpleGrid columns={2} spacing={3}>
                  <FormControl>
                     <FormLabel fontSize='sm'>Nombre y apellido</FormLabel>
                     <Input
                        borderColor='gray.400'
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
                     type='text'
                     name='mensaje'
                     placeholder='¡Hola amigos de TechGurú!'
                     focusBorderColor='primario'
                  />
               </FormControl>
               {!isSubmitted ? (
                  <Button
                     mt={2}
                     type='submit'
                     aria-label='Enviar mensaje'
                     disabled={isSubmitting}
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
            <Stack align='end'>
               <Stack
                  border='2px solid'
                  borderColor='primario'
                  paddingInline={5}
                  paddingBlock={3}
                  borderRadius={5}
                  as='button'
                  cursor='none'
                  onClick={handleCalendlyClick}
                  w='fit-content'
                  
               >
                  <Text textAlign='right' w='45ch'>
                     También podés agendar tu entrevista directamente según tu
                     disponibilidad haciendo click aquí.
                  </Text>
               </Stack>
            </Stack>
         </SimpleGrid>
      </Stack>
   );
};

export default ContactForm;
