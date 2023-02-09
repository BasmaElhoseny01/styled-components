//npm install styled-components

import Container from './components/styles/Container.styled';
import { StyledHeader } from './components/styles/StyledHeader.styled';
import { StyledHeaderWithProps, StyledHeaderWithPropsTwo } from './components/styles/StyledHeaderWithProps.styled';
import { ContainerUsingTheme } from './components/styles/ContainerUsesThemeProvider.styled';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './components/styles/Global';

//(4)Theme Provider (Creating theme)
const theme = {
  colors: {
    header:"#123456",
    text:"orange",
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* (5) Global Style */}
      <GlobalStyles/>
      <Container>My First Styled Component</Container>
      <StyledHeader>Nested Component<h1>This is child of header</h1></StyledHeader>
      <StyledHeaderWithProps bg="blue">bg is passed as a prop</StyledHeaderWithProps>
      <StyledHeaderWithPropsTwo bg="green">bg is passed as a prop</StyledHeaderWithPropsTwo>
      <ContainerUsingTheme>Using theme</ContainerUsingTheme>
      <h4 className='class'>class 😉</h4>
    </ThemeProvider>
  );
}

export default App;
