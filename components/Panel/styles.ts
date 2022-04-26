import styled from 'styled-components';

interface IContainerProps {
  noPadding: boolean;
  isCollapsed: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.color.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  padding: ${({ noPadding }) => (noPadding ? '0' : '20px')};
  max-height: ${({ isCollapsed }) => (isCollapsed ? '70px' : '1200px')};
  height: auto;
  transition: all 0.5s ease-in-out;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  h4 {
    margin-right: 8px;
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Collapse = styled.div`
  cursor: pointer;
`;
