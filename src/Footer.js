import React from "react";

export default function Footer(props) {
  return (
    <footer className={props.darkMode ? "dark" : ""}>
      <small>© 2022 Tanishka-dev. All rights reserved.</small>
    </footer>
  );
}
