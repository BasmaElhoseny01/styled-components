//(5)Global Styles like to apply styles globally :D
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
//Import font
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
* {
    box-sizing: border-box;
  }

body {
    background-color: #aaaaaa;
}

//Use theme :)
.class{
    color: ${({theme})=>theme.colors.text};
}
`

export default GlobalStyles