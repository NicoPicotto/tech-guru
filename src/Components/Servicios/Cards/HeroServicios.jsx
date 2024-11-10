import { Stack, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import heroServices from "/assets/Services/hero-services.jpg";

const HeroServicios = () => {
   return (
      <Stack paddingBlock='5rem'>
         <SimpleGrid columns={2} spacing={10}>
            <Stack maxW='70ch' gap={5} justify='center'>
               <Heading size='2xl'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
               </Heading>
               <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quis metus ac risus porttitor maximus. Quisque posuere
                  est sed egestas blandit. Ut risus est, euismod eget faucibus
                  id, mollis ut odio. Aliquam congue efficitur pulvinar.
               </Text>
            </Stack>
            <Stack align='end'>
               <Image
                  src={heroServices}
                  maxW='80%'
                  rounded='lg'
                  style={{
                     clipPath:
                        "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
                  }}
               />
            </Stack>
         </SimpleGrid>
      </Stack>
   );
};

export default HeroServicios;
