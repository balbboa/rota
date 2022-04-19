import type { NextPage } from "next";
import Container from "../components/Container";
import DataTable from "../components/Table";

const Escalas: NextPage = () => {
  return (
    <Container title="Escalas">
      <div>
        <DataTable />
      </div>
    </Container>
  );
};

export default Escalas;
