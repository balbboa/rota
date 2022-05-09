import DashboardCards from "../components/Card";
import Container from "../components/Container";
import Panel from "../components/Panel";

function Home() {
  return (
    <Container title="Dashboard">
      <DashboardCards />
      <Panel/>
    </Container>
  );
}

export default Home;
