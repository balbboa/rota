import styled from "styled-components";

type SidebarContainerProps = {
  isOpened: boolean;
};
export const SidebarContainer = styled.aside<SidebarContainerProps>`
  background-color: ${(props) => props.theme.colors.customBg};
  width: ${(props) => (props.isOpened ? "20vw" : "0vw")};
  transition: width 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
