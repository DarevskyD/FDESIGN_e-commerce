import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.urbanist}, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  overflow: ${({ toggle }) => (toggle ? 'hidden' : 'visible')};
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0;
}

button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
li {
  list-style-type: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;  
}

a:-webkit-any-link {
  text-decoration: none;
  color: inherit;
}

a, button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
`;

export default GlobalStyles;
