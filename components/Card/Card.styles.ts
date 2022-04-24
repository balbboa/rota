import styled from "styled-components";

export const CustomCard = styled.div`
    
  div {
    background: rgb(34,146,210);
    background: linear-gradient(90deg, rgba(34,146,210,1) 50%, rgba(34,105,210,1) 85%, rgba(34,85,210,1) 100%);
    color: white;
    border-radius: 25px;
    cursor: pointer;
    width: 200px;
    height: 150px;
  }
`;

export const TextCard = styled.h4`
  margin-top: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;