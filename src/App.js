import logo from "./logo.svg";
import Layout_Container from "./components/layouts/layout_container";
import Footer from "./components/layouts/footer";
import Home from "./components/public/home";
function App() {
  return (
    <div>
      <Layout_Container>
        <Home />
        <Footer />
      </Layout_Container>
    </div>
  );
}

export default App;
