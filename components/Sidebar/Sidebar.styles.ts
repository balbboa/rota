import styled from "styled-components";

type SidebarContainerProps = {
  isOpened: boolean;
};
export const SidebarContainer = styled.aside<SidebarContainerProps>`
  @media(max-width: 992px) {
    background-color: ${(props) => props.theme.colors.customBg};
    width: ${(props) => (props.isOpened ? "100vw" : "0vw")};
    transition: width 0.5s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 999;
  }
  
  @media(min-width: 992px) {
    background-color: ${(props) => props.theme.colors.customBg};
    width: 20vw;
    transition: width 0.5s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`;

export const Exit = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  font-size: 16px;
  padding: 10px 0px 10px 10px;
  padding: 20px;
  margin: 25px;
  color: #FF4842;
  svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    color: #9c0d08;
    cursor: pointer;
  }

  &.selected {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textLight};
    border-radius: 16px;
  }
`;
