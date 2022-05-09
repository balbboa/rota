import DashboardCards from "../components/Card";
import Container from "../components/Container";
import Panel from "../components/Panel";
import { loadUser } from "../lib/getUser";

// export async function getStaticProps(context) {
  
//   const dados = await loadUser()

//   if (!dados) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       dados
//     }
//   }
// }

function Home({dados}) {
  return (
    <Container title="Dashboard">
      <DashboardCards />
      <Panel {...dados}/>
    </Container>
  );
}

export default Home;
