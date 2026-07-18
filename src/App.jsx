import Home from "./pages/Home";
import ScrollProgress from "./components/common/ScrollProgress";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Home />
    </>
  );
}

export default App;