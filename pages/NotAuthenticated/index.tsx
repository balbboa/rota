import React from 'react';

import Panel from '../../components/Panel';

import {
  Container,
  Content,
  Background,
} from './styles';

interface IProps {
  children: React.ReactNode;
}

export default function NotAuthenticatedLayout({
  children,
}: IProps): JSX.Element {
  return (
    <Container>
      <Content>
        <Panel>{children}</Panel>
      </Content>
      <Background />
    </Container>
  );
}
