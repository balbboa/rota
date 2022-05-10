import styled from "styled-components";

export const BgSection = styled.div`  
    background-image: linear-gradient(172deg, rgba(12, 170, 234, 0.5), rgba(33, 37, 41, 0.9)), url(/bg.jpg);
    min-height: 100%;
    background-size: cover;
    height: 100vh;
    display: flex;

    section {
        margin:auto;
    }
`;

export const FormLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  border-radius: 1rem;
  padding: 5rem;
  background-color: white;

  @media(max-width: 992px) {  
    padding: 3rem;
  }
`;