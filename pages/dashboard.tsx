import React from "react";
import DashboardCards from "../components/Card";
import Container from "../components/Container";
import Panel from "../components/Panel";
import withAuth from "../utils/withAuth";

function Home() {

  return (
    <Container title="Dashboard">
      <DashboardCards />
      <Panel />
    </Container>
  );
}

export default withAuth(Home);
