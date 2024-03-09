import "./App.css";
import { Title, Description, Button, Products } from "./components/index";

const img =
  "https://cdn.pixabay.com/photo/2024/02/24/10/31/norway-8593725_960_720.jpg";

const App = () => {
  return (
    <div className="container">
      <h1>Hello Cohort Four React</h1>
      <Products/>
      <Title />
      <img src={img} alt="river avatar" />
      <Description />
      <Button />
    </div>
  );
};

export default App;
