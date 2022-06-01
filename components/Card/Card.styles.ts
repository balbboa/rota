import styled from "styled-components";

export const CustomCard = styled.div`
  &:hover {
    opacity: 80%;
  }

  @media(min-width: 992px) and (max-width: 1400px) {  
    div {
      background: rgb(0,30,60);
      background: linear-gradient(90deg, rgba(0,30,60,1) 0%, rgba(0,60,120,1) 25%, rgba(0,87,173,1) 75%, rgba(0,103,205,1) 100%);
      color: white;
      border-radius: 25px;
      cursor: pointer;  
      height: 150px;
      hover: 

      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
      width: 200px;
    }
  }

  @media(min-width: 1400px) {  
    div {
      background: rgb(0,30,60);
      background: linear-gradient(90deg, rgba(0,30,60,1) 0%, rgba(0,60,120,1) 25%, rgba(0,87,173,1) 75%, rgba(0,103,205,1) 100%);
      color: white;
      border-radius: 25px;
      cursor: pointer;  
      height: 150px;

      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
      width: 250px;
      
    }
  }

  @media(max-width: 992px) {  
    div {
      color: black;
      cursor: pointer;
      width: 90px;
      height: 100px;

      box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
      -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
      -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    }
  }
`;

export const TextCard = styled.h4`
  @media(min-width: 992px) {   
    margin-top: 10px;
  }
  @media(max-width: 992px) {  
    margin-top: 0px; 
    font-weight: 400;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media(min-width: 992px) and (max-width: 1400px) {  
    justify-content: space-between;
  }

  @media(min-width: 1400px) {  
    justify-content: space-between;
    margin: 25px;
  }

  @media(max-width: 992px) {  
    justify-content: space-around;
  }
`;