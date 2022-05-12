import { useRouter } from "next/router";
import React from "react";
import DashboardCards from "../components/Card";
import Container from "../components/Container";
import Panel from "../components/Panel";
import { AuthContext } from "../contexts/AuthContext";

function Home() {

  return (
    <Container title="Dashboard">
      <DashboardCards />
      <Panel/>
    </Container>
  );
}

export default Home;
