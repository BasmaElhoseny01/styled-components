import styled from 'styled-components';

//(3)Passing Props to the styled Component
export const StyledHeaderWithProps = styled.header`
background-color: ${(props) => props.bg};
`

export const StyledHeaderWithPropsTwo = styled.header`
background-color: ${({bg}) => bg};
`