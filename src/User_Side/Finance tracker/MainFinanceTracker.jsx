import styled from "styled-components"; 
import Tracker from "./Tracker";
import GlobalStyles from "./GlobalStyle";
  
const Main = styled.div` 
  display: flex; 
  justify-content: center; 
  align-items: center; 
`; 
  
const MainFinanceTracker = () => { 
  return ( 
    <Main> 
      <GlobalStyles /> 
      <Tracker /> 
    </Main> 
  ) 
} 
  
export default MainFinanceTracker;