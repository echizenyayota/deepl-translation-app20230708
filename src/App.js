import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";


const App = () => {
  return (
    <div className="app">
      <TextBox style='input' />
          <Arrows />
      <TextBox style='output'/>
    </div>
  );
}

export default App;
