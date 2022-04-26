import styled from "styled-components";

export const CustomCard = styled.div`
    
  div {
    background: rgb(34,146,210);
    background: linear-gradient(90deg, rgba(34,146,210,1) 50%, rgba(34,105,210,1) 85%, rgba(34,85,210,1) 100%);
    color: white;
    border-radius: 25px;
    cursor: pointer;
    width: 250px;
    height: 150px;

    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  }
`;

export const TextCard = styled.h4`
  margin-top: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px;
`;