import "./App.css";
import Button from "./components/Button.jsx";
import CheckBox from "./components/CheckBox.jsx";
import Divider from "./components/Divider.jsx";

const page = [
  {
    label: "Page 1",
  },
  {
    label: "Page 2",
  },
  {
    label: "Page 3",
  },
  {
    label: "Page 4",
  },
  {
    label: "Page 5",
  },
  {
    label: "Page 6",
  },
];

function App() {
  return (
    <main>
      <div className="container">
        <CheckBox label="All Pages" />
        <Divider />
        <div className="menu">
          {page.map((page, idx) => (
            <CheckBox label={page.label} key={idx} />
          ))}
        </div>
        <Divider />
        <Button />
      </div>
    </main>
  );
}

export default App;
