import styled from "styled-components";

export const MenuItemContainer = styled.a<{ depth: number }>`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  padding: 10px 0px 10px 10px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 25px;
  color: #B8BED9;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textLight};
    border-radius: 16px;
  }
`;
