import type { NextPage } from "next";
import DashboardCards from "../components/Card";
import Container from "../components/Container";
import Panel from "../components/Panel";


const Home: NextPage = () => {
  return (
    <Container title="Dashboard">
      <DashboardCards />
      <Panel />
    </Container>
  );
};

export default Home;
