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
