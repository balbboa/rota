import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;

  button {
    background-color: #001e3c;
  }

  @media(min-width: 992px) {   
    flex-direction: row;  
    align-items: center;

    & div{
      margin-right:10px;
    }
  }

  @media(max-width: 992px) {  
    flex-direction: column;  
    
    & div{
      margin-bottom: 10px;
    }
  }
`;