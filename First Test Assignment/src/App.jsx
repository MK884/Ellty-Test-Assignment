import React from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import CheckBox from "./components/CheckOptions.jsx";
import Divider from "./components/Divider.jsx";

const pages = [
  {
    label: "Page 1",
    isChecked: false,
  },
  {
    label: "Page 2",
    isChecked: false,
  },
  {
    label: "Page 3",
    isChecked: false,
  },
  {
    label: "Page 4",
    isChecked: false,
  },
  {
    label: "Page 5",
    isChecked: false,
  },
  {
    label: "Page 6",
    isChecked: false,
  },
];

function App() {
  // use react usestate hook for rendering and updating all pages
  const [page, setPage] = React.useState(pages);

  // to toggle All Pages select check box
  const [isAllChecked, setIsAllChecked] = React.useState(false);

  // this function call when user click on any pages CheckBox components
  // Here we are matching the label got as props to all pages and wheneever found match update its isCkecked to opposite and all rest same
  const handleCheckClick = (label) => {
    const newPages = [...pages];
    newPages.map((page) =>
      page.label === label ? (page.isChecked = !page.isChecked) : page
    );
    setPage(newPages);
  };

  // this function call when 'All Pages' checkBox component is clicked
  // it will update the state of isAllChecked and update all pages accordingly
  const handleAllCheckClick = () => {
    const newCheckState = !isAllChecked;
    setIsAllChecked(newCheckState);
    setPage(page.map((page) => ({ ...page, isChecked: newCheckState })));
  };

  return (
    <main>
      <div className="container">
        <CheckBox
          label="All Pages"
          onClick={handleAllCheckClick}
          isChecked={isAllChecked}
        />
        <Divider />
        <div className="menu">
          {page.map((page, idx) => (
            <CheckBox
              label={page?.label}
              isChecked={page?.isChecked}
              onClick={() => handleCheckClick(page?.label)}
              key={idx}
            />
          ))}
        </div>
        <Divider />
        <Button text={"Done"} />
      </div>
    </main>
  );
}

export default App;
