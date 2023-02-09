//(4)Using theme provider
import styled from 'styled-components';

export const ContainerUsingTheme = styled.div`
background-color: ${({theme})=> theme.colors.header};
`