import { extendTheme } from "@chakra-ui/react";

const colors = {
   negro: "#2B2A2F",
   gris: "#292929",
   blanco: "#FFFFFF",
   primario: "#3691C2",
   secundario: "#5FC9DF",
};

/*Ejemplo de fonts de Gogole Fonts / Agregar al head del index.html*/
/*const fonts = {
   heading: `"Unbounded", sans-serif;`,
   body: `"Alexandria", sans-serif;`,
};*/

const Heading = {
   baseStyle: {
      fontWeight: "regular",
   },
};

const Button = {
   baseStyle: {
      fontWeight: "regular",
      rounded: "full",
      fontFamily: `"Unbounded", sans-serif;`,
      shadow: "md",
   },
   // Variaciones de estilos por prop `variant`
   variants: {
      solid: {
         bg: colors.negro,
         width: "fit-content",
         color: colors.blanco,
         _hover: {
            bg: "#2F83A8",
         },
      },
      outline: {
         border: "2px solid",
         width: "fit-content",
         borderColor: colors.blanco,
         color: colors.blanco,
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
         color: colors.blanco,
         width: "fit-content",
         shadow: "none",
         _hover: {
            textDecoration: "underline",
            textUnderlineOffset: "2px",
         },
      },
   },
};

const styles = {
   global: {
      "html, body": {
         backgroundColor: colors.negro,
         color: colors.blanco,
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
