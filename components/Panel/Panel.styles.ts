import styled from "styled-components";

export const CardPanel = styled.div`
    
  div {
    color: white;
    border-radius: 25px;
    width: 780px;
    height: 360px;
    background-image: url("policeman.png"), linear-gradient(90deg, rgba(34,146,210,1) 50%, rgba(34,105,210,1) 85%, rgba(34,85,210,1) 100%);
    background-position: right;
    background-repeat: no-repeat;
  }
`;

export const HeaderPanel = styled.h2`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
  align-items: center;
`;

export const TextCard = styled.h4`
  margin-top: 10px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
`;