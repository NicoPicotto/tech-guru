import { extendTheme } from "@chakra-ui/react";

const colors = {
   negro: "#171735",
   gris: "#292929",
   blanco: "#e3e3e3",
   primario: "#0076b4",
   primarioDarker: "#003c5c",
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
      fontWeight: 700,
      lineHeight: 1,
      fontFamily: `"Open Sans", sans-serif;`,
   },
};

const Text = {
   baseStyle: {
      fontWeight: 400,
      fontFamily: `"Open Sans", sans-serif;`,
      lineHeight: 1.3,
   },
};

const Button = {
   baseStyle: {
      fontWeight: "regular",
      rounded: "md",
      fontFamily: `"Open Sans", sans-serif;`,
      shadow: "md",
      paddingBlock: 1,
      cursor: "inherit",
   },
   // Variaciones de estilos por prop `variant`
   variants: {
      solid: {
         bg: colors.primario,
         width: "fit-content",
         color: colors.blanco,
         _hover: {
            bg: colors.primarioDarker,
            transform: "translateY(-2px)",
            dropShadow: "md",
         },
      },
      outline: {
         border: "2px solid",
         width: "fit-content",
         borderColor: colors.primario,
         color: colors.negro,
         _hover: {
            bg: colors.primarioDarker,
            borderColor: colors.primarioDarker,
            color: colors.blanco,
            transform: "translateY(-2px)",
            dropShadow: "md",
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
      arrow: {
         bg: colors.primario,
         width: "fit-content",
         color: colors.blanco,
         _hover: {
            ".arrow": { transform: "translateX(2px)" },
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
         //scrollBehavior: "smooth",
      },
   },
};

const theme = extendTheme({
   colors,
   styles,
   components: { Button, Heading, Text },
});

export default theme;
