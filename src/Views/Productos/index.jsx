import Container from "../../Components/Commons/Container/Container";
import ProductList from "../../Components/Products";
import Alquiler from "../../Components/Products/Alquiler";
import HeroProducts from "../../Components/Products/HeroProducts";
import Reacondicionados from "../../Components/Products/Reacondicionados";

const ProductosView = () => {
   return (
      <>
         <Container>
            <HeroProducts />
            <Reacondicionados />
            <ProductList />
            <Alquiler />
         </Container>
      </>
   );
};

export default ProductosView;
