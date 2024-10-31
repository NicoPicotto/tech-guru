import { Divider } from "@chakra-ui/react";
import Container from "../../Components/Commons/Container/Container";
import ProductList from "../../Components/Products";
import HeroProducts from "../../Components/Products/HeroProducts";
import Reacondicionados from "../../Components/Products/Reacondicionados";

const ProductosView = () => {
   return (
      <>
         <Container>
            <HeroProducts />
         </Container>
         <Reacondicionados />
         <Container>
            <ProductList />
         </Container>
      </>
   );
};

export default ProductosView;
