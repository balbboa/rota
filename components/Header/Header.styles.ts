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
  padding: 10px;

  & svg {
    height: 30px;
  }

  &:hover {
    cursor: pointer;
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
