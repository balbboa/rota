import styled from "styled-components";

export const Container = styled.div`
  @media(max-width: 992px) {
    width: 100vw; 
    position: fixed
  } 
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.textDark};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  background-color: #e4f6ff;
`;

export const PageContainer = styled.div`
  @media(min-width: 992px) {   
    padding: 20px;
    height: 100vh;
    width: 80vw;
    background-color: white;
    border-radius: 25px 0 0 0;
  }
  @media(max-width: 992px) {   
    padding: 20px;
    width: 100vw;
    background-color: white;
    overflow-y: scroll;
    height: 100vh;
  }

`;
