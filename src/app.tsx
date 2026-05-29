import Container from './components/core/container/Container';
import { Header } from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

export function App() {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
      </Container>
    </>
  );
}
