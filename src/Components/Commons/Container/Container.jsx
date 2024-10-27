/* eslint-disable react/prop-types */
import { Stack } from "@chakra-ui/react";

const Container = ({ id, children }) => {
   return (
      <Stack align='center' paddingInline='2rem' id={id}>
         <Stack maxW='80rem' w='100%' gap='1.5rem' marginBlock='2rem'>
            {children}
         </Stack>
      </Stack>
   );
};

export default Container;
