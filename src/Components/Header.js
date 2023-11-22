import React from "react";
import { ImportContacts } from "@mui/icons-material";

function Header() {
  return (
    <header>
      <div className="header-logo">
        <span className="logo-container">
          <ImportContacts />
        </span>
        <span>STORIES</span>
      </div>
      <div className="btn-yl">
        <button>Courses</button>
      </div>
    </header>
  );
}

export default Header;
