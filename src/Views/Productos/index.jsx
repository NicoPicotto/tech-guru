import Container from "../../Components/Commons/Container/Container";
import ProductList from "../../Components/Products";
import HeroProducts from "../../Components/Products/HeroProducts";
import Reacondicionados from "../../Components/Products/Reacondicionados";

const ProductosView = () => {
   return (
      <>
         <Container>
            <HeroProducts />
            <Reacondicionados />
            <ProductList />
         </Container>
      </>
   );
};

export default ProductosView;
