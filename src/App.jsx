import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import HomeView from "./Views/Home";
import ServiciosView from "./Views/Servicios";
import QuienesSomosView from "./Views/QuienesSomos";
import ContactoView from "./Views/Contacto";
import ProductosView from "./Views/Productos";
import Navbar from "./Components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import Lenis from "@studio-freight/lenis";
import ProductDetailsView from "./Views/Productos/ProductDetails";
import ClientesView from "./Views/Clientes/ClientesView";
import Footer from "./Components/Footer/Footer";

function App() {
   useEffect(() => {
      const lenis = new Lenis();

      function raf(time) {
         lenis.raf(time);
         requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
   }, []);

   return (
      <ChakraProvider theme={theme}>
         <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color='0, 118, 180'
            showSystemCursor={false}
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            hasBlendMode={true}
            style={{ zIndex: 9999 }}
            clickables={[
               "a",
               "h1",
               "h2",
               "h3",
               "h4",
               'input[type="text"]',
               'input[type="email"]',
               'input[type="number"]',
               'input[type="submit"]',
               'input[type="image"]',
               "label[for]",
               "select",
               "textarea",
               "button",
               ".link",
            ]}
         />
         <Router>
            <ScrollToTop />
            <Navbar />

            <Routes>
               <Route path='/' element={<HomeView />} />
               <Route path='/servicios' element={<ServiciosView />} />
               <Route path='/quienes-somos' element={<QuienesSomosView />} />
               <Route path='/clientes' element={<ClientesView />} />
               <Route path='/contacto' element={<ContactoView />} />
               <Route path='/productos' element={<ProductosView />} />
               <Route path='/productos/:id' element={<ProductDetailsView />} />
            </Routes>
            <Footer />
         </Router>
      </ChakraProvider>
   );
}

export default App;
