import type { NextPage } from "next";
import DashboardCards from "../components/Card";
import Container from "../components/Container";


const Home: NextPage = () => {
  return (
    <Container title="Dashboard">
      <DashboardCards />
      
    </Container>
  );
};

export default Home;
