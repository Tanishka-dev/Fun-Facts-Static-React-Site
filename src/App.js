import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Bar from "./Bar";

export default function App() {
  const [darkMode, setDakrMode] = React.useState(false);

  function toggleDarkMode() {
    setDakrMode((prevMode) => !prevMode);
  }
  return (
    <div>
      <Bar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Content darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
