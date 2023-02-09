//(2)Nesting
import styled from 'styled-components';

export const StyledHeader = styled.header`
background-color: #aabbcc;

//The h1 child for this header
h1{
    color: red;
}

&:hover{
    background-color: red;
}
`