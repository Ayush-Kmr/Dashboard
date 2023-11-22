import { ThumbUpOutlined } from "@mui/icons-material";
import React from "react";

function Post(props) {
  const { heading, text, author, id } = props;
  const newText = text.split("\n").map((str, i) => <p key={i}>{str}</p>);
  const handleOnclick = () => {
    const elem = document.getElementById("text" + id);
    if (elem.style.overflow === "visible") {
      elem.style.overflow = "hidden";
      elem.style.display = "-webkit-box";
    } else {
      elem.style.overflow = "visible";
      elem.style.display = "block";
    }
  };
  return (
    <div className="post">
      <div className="header-post">
        <h1>{heading}</h1>
        <div className="social-logo">
          <ThumbUpOutlined className="icon" />
        </div>
      </div>
      <div className="text" onClick={handleOnclick} id={"text" + id}>
        {newText}
      </div>
      <div className="post-footer">
        <div>
          <span style={{ color: "blue" }}>musing</span> by {author}
        </div>
        <div>August 2 ● 2 mins Read ● 102 Views</div>
      </div>
    </div>
  );
}

export default Post;
