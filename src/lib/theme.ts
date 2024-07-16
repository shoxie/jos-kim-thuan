import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { defineStyleConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import '@fontsource/poppins'
import '@fontsource-variable/playfair-display';

const colors = {
  global: {
    body: {
      bg: {
        light: "#f8f9fa", // Light mode background
        dark: "black",  // Netflix-like dark background
      },
      default: {
        light: "#333333", // Light mode text
        dark: "#e5e5e5",  // Netflix-like light text
      },
      border: {
        light: "#1f1d2e",
        dark: "#e50914",  // Netflix-like red accent
      },
    },
  },
  components: {
    Drawer: {
      dialog: {
        light: "white",
        dark: "#141414",
      },
    },
    Button: {
      bg: {
        light: "#e50914", // Netflix-like red button
        dark: "#e50914",  // Netflix-like red button
      },
      color: {
        light: "#ffffff", // Light button text
        dark: "#ffffff",  // Dark button text
      },
    },
  },
};

const styles = {
  global: (props: any) => ({
    body: {
      color: mode(
        colors.global.body.default.light,
        colors.global.body.default.dark
      )(props),
      bg: mode(colors.global.body.bg.light, colors.global.body.bg.dark)(props),
      border: mode(
        colors.global.body.border.light,
        colors.global.body.border.dark
      )(props),
      fontFamily: "Poppins",
    },
  }),
};

const components = {
  Drawer: defineStyleConfig({
    variants: {
      dialog: (props: StyleFunctionProps) => ({
        bg: props.colorMode === 'dark' ? colors.components.Drawer.dialog.dark : colors.components.Drawer.dialog.light,
      }),
    },
  }),
  Button: defineStyleConfig({
    variants: {
      solid: (props: StyleFunctionProps) => ({
        bg: props.colorMode === 'dark' ? colors.components.Button.bg.dark : colors.components.Button.bg.light,
        color: props.colorMode === 'dark' ? colors.components.Button.color.light : colors.components.Button.color.dark,
      }),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
    playfairDisplay: "'Playfair Display', serif",
}

const theme = extendTheme({
  colors,
  components,
  styles,
  config,
  fonts
});

export default theme;
