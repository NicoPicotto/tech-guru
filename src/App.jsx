import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import HomeView from "./Views/Home";
import ServiciosView from "./Views/Servicios";
import QuienesSomosView from "./Views/QuienesSomos";
import ContactoView from "./Views/Contacto";
import ProductosView from "./Views/Productos";
import Navbar from "./Components/Navbar";

function App() {
   return (
      <ChakraProvider theme={theme}>
         <Router>
            <ScrollToTop />
            <Navbar />

            <Routes>
               <Route path='/' element={<HomeView />} />
               <Route path='/servicios' element={<ServiciosView />} />
               <Route path='/quienes-somos' element={<QuienesSomosView />} />
               <Route path='/contacto' element={<ContactoView />} />
               <Route path='/productos' element={<ProductosView />} />
            </Routes>
         </Router>
      </ChakraProvider>
   );
}

export default App;
