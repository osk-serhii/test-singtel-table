import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle((props: any) => {
  return `
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props.theme.colors.text};
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Avenir Light";
    src: url("/fonts/Avenir/Avenir-Light.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-Light.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-Light.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-Light {
    font-family: "Avenir Light", sans-serif;
  }
  @font-face {
    font-family: "Avenir Light Oblique";
    src: url("/fonts/Avenir/Avenir-LightOblique.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-LightOblique.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-LightOblique.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-LightOblique {
    font-family: "Avenir Light Oblique", sans-serif;
  }
  @font-face {
    font-family: "Avenir Book";
    src: url("/fonts/Avenir/Avenir-Book.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-Book.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-Book.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-Book {
    font-family: "Avenir Book", sans-serif;
  }
  @font-face {
    font-family: "Avenir Book Oblique";
    src: url("/fonts/Avenir/Avenir-BookOblique.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-BookOblique.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-BookOblique.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-BookOblique {
    font-family: "Avenir Book Oblique", sans-serif;
  }
  @font-face {
    font-family: "Avenir Roman";
    src: url("/fonts/Avenir/Avenir-Roman.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-Roman.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-Roman.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-Roman {
    font-family: "Avenir Roman", sans-serif;
  }
  @font-face {
    font-family: "Avenir Oblique";
    src: url("/fonts/Avenir/Avenir-Oblique.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-Oblique.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-Oblique.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-Oblique {
    font-family: "Avenir Oblique", sans-serif;
  }
  @font-face {
    font-family: "Avenir Medium";
    src: url("/fonts/Avenir/Avenir-Medium.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-Medium.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-Medium.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-Medium {
    font-family: "Avenir Medium", sans-serif;
  }
  @font-face {
    font-family: "Avenir Medium Oblique";
    src: url("/fonts/Avenir/Avenir-MediumOblique.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-MediumOblique.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-MediumOblique.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-MediumOblique {
    font-family: "Avenir Medium Oblique", sans-serif;
  }
  @font-face {
    font-family: "Avenir Black";
    src: url("/fonts/Avenir/Avenir-Black.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-Black.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-Black.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-Black {
    font-family: "Avenir Black", sans-serif;
  }
  @font-face {
    font-family: "Avenir Black Oblique";
    src: url("/fonts/Avenir/Avenir-BlackOblique.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-BlackOblique.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-BlackOblique.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-BlackOblique {
    font-family: "Avenir Black Oblique", sans-serif;
  }
  @font-face {
    font-family: "Avenir Heavy";
    src: url("/fonts/Avenir/Avenir-Heavy.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-Heavy.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-Heavy.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-Heavy {
    font-family: "Avenir Heavy", sans-serif;
  }
  @font-face {
    font-family: "Avenir Heavy Oblique";
    src: url("/fonts/Avenir/Avenir-HeavyOblique.woff2")
        format("woff2"),
      url("/fonts/Avenir/Avenir-HeavyOblique.woff")
        format("woff"),
      url("/fonts/Avenir/Avenir-HeavyOblique.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  .font-Avenir-HeavyOblique {
    font-family: "Avenir Heavy Oblique", sans-serif;
  }
`;
});
