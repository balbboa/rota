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
  background-color: #bdcdf5;
`;

export const PageContainer = styled.div`
  background-color: white;
  padding: 20px;

  @media(min-width: 992px) {   
    width: 80vw;
    border-radius: 25px 0 0 0;
  }
  @media(max-width: 992px) {   
    width: 100vw;
    overflow-y: scroll;
  }

`;
