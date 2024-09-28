import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import HomeView from "./Views/Home";

function App() {
   return (
      <ChakraProvider theme={theme}>
         <Router>
            <ScrollToTop />
            {/* <Navbar /> */}

            <Routes>
               <Route path='/' element={<HomeView />} />
            </Routes>
         </Router>
      </ChakraProvider>
   );
}

export default App;
