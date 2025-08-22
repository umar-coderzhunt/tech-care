import Navbar from "./components/Navbar";
import Dashboard from "./page/Dashboard";

const App = () => {


  return (
    <div className="max-w-[1440px] w-full mx-auto mb-10">
      <Navbar />
      <Dashboard/>
    </div>
  );
};

export default App;
