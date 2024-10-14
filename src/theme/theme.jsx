import { extendTheme } from "@chakra-ui/react";

const colors = {
   negro: "#171735",
   gris: "#292929",
   blanco: "#e3e3e3",
   primario: "#0076b4",
   secundario: "#57a639",
   terciario: "#297aa3",
};

/*Ejemplo de fonts de Gogole Fonts / Agregar al head del index.html*/
/*const fonts = {
   heading: `"Unbounded", sans-serif;`,
   body: `"Alexandria", sans-serif;`,
};*/

const Heading = {
   baseStyle: {
      fontWeight: 500,
      fontFamily: `"Open Sans", sans-serif;`,
   },
};

const Button = {
   baseStyle: {
      fontWeight: "regular",
      rounded: "md",
      fontFamily: `"Open Sans", sans-serif;`,
      shadow: "md",
      paddingBlock: 1,
   },
   // Variaciones de estilos por prop `variant`
   variants: {
      solid: {
         bg: colors.primario,
         width: "fit-content",
         color: colors.blanco,
         _hover: {
            bg: colors.terciario,
         },
      },
      outline: {
         border: "2px solid",
         width: "fit-content",
         borderColor: colors.primario,
         color: colors.negro,
         _hover: {
            bg: colors.primario,
            borderColor: colors.primario,
            color: colors.blanco,
         },
      },
      ghost: {
         color: colors.primario,
         width: "fit-content",
         shadow: "none",
         _hover: {
            bg: colors.primario,
            color: colors.blanco,
            shadow: "md",
         },
      },
      link: {
         color: colors.negro,
         width: "fit-content",
         fontWeight: 500,
         shadow: "none",
         _hover: {
            textDecoration: "underline",
            textUnderlineOffset: "2px",
            textDecorationColor: colors.primario,
         },
      },
   },
};

const styles = {
   global: {
      "html, body": {
         backgroundColor: colors.blanco,
         color: colors.negro,
         fontSize: "16px",
         scrollBehavior: "smooth",
      },
   },
};

const theme = extendTheme({
   colors,
   styles,
   components: { Button, Heading },
});

export default theme;
