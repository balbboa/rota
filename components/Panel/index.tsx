import React, { useState } from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { Container, Content, Header, Collapse } from './styles';

interface IProps {
  children: React.ReactNode;
  noPadding?: boolean;
  canCollapse?: boolean;
  title?: string;
}

export default function Panel({
  children,
  noPadding = false,
  title = '',
  canCollapse = false,
}: IProps): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Container noPadding={noPadding} isCollapsed={isCollapsed}>
      {title && (
        <Header>
          <h4>{title}</h4>
          {canCollapse && (
            <Collapse>
              {isCollapsed ? (
                <FaPlus size={18} onClick={() => setIsCollapsed(false)} />
              ) : (
                <FaMinus size={18} onClick={() => setIsCollapsed(true)} />
              )}
            </Collapse>
          )}
        </Header>
      )}
      <Content>{children}</Content>
    </Container>
  );
}
