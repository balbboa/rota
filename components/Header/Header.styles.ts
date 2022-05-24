import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: ${(props) => props.theme.colors.customBg};
  height: 80px;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.textDark};
  font-weight: bold;
`;

export const IconContainer = styled.div`
  @media(min-width: 992px) {
    display: none; 
  }

  & svg {
    height: 30px;
  }
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
  img {
    width: 120px !important;
    height: 23px !important;
  }
  padding: 80px;

  @media(max-width: 992px) {
      display: none; 
    } 
`;

export const Text = styled.p`
  margin-left: 10px;
`;

export const Notification = styled.div`
  margin-right: 40px;
  
  &:hover {
    cursor: pointer;
  }
`;


export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 40px;
`;
