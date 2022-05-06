import { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Content, PageContainer } from "./AuthenticatedLayout.styles";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function AuthenticatedLayout({ children }: DashboardLayoutProps) {
  const [isOpened, setOpened] = useState(false);
  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <Container>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Content>
        <Sidebar isOpened={isOpened} />
        <PageContainer>{children}</PageContainer>
      </Content>
    </Container>
  );
}
