import styled from "styled-components";

export const CardPanel = styled.div`
  div {
    color: white;
    border-radius: 25px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  }
  @media(min-width: 1400px) {     
    div {
      width: 780px;
      height: 360px;
      background-image: url("policeman.png"), linear-gradient(90deg, rgba(0,30,60,1) 0%, rgba(0,87,173,1) 50%, rgba(0,128,255,1) 100%);
      background-position: right;
      background-repeat: no-repeat;     
    }
  }

  @media(min-width: 992px) and (max-width: 1400px) {
    div {
      width: 780px;
      height: 300px;
      background-image: url("policeman.png"), linear-gradient(90deg, rgba(0,30,60,1) 0%, rgba(0,87,173,1) 50%, rgba(0,128,255,1) 100%);
      background-position: right;
      background-repeat: no-repeat;  
    } 
  }

  @media(max-width: 992px) {     
    div {
      color: white;
      border-radius: 25px;
      width: 330px;
      height: 430px;
      background-image: url("policeman.png"), linear-gradient(90deg, rgba(0,30,60,1) 0%, rgba(0,87,173,1) 50%, rgba(0,128,255,1) 100%);
      background-position: top left;
      background-repeat: no-repeat;  
    }
  }
`;

export const HeaderPanel = styled.h2`
  display: flex;

  @media(min-width: 992px) and (max-width: 1400px) {
    margin-top: 0;
  }
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