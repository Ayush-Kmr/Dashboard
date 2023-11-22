import React from "react";
import "../Style/Dashboard.css";
import Header from "../Components/Header";
import {
  IcecreamTwoTone,
  ImportContactsRounded,
  InsertCommentRounded,
  PersonOffOutlined,
} from "@mui/icons-material";
import Post from "../Components/Post";
import data from "../Helper/data.json";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="body-container">
        <div className="header-bg">
          <img
            src={
              "https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
            }
            alt="bg-img"
          />
        </div>
        <div className="portfolio">
          <div className="top-container">
            <div className="upper-container">
              <div className="pfp-cont">
                <img
                  src={
                    "https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84"
                  }
                  alt="pfp"
                />
              </div>
              <div className="user-info">
                <div className="name">Shivang Pratap Yadav</div>
                <div className="btn-container">
                  <div>
                    <div className="btn-outlined">6482</div>
                    <span className="text-small">Followers</span>
                  </div>
                  <div>
                    <div className="btn-outlined">245</div>
                    <span className="text-small">Following</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lower-container">
              <div className="bio">Co-founder & CEO at Terribly Tiny Tales</div>
              <a href="https://www.instagram.com/">
                https://www.instagram.com/
              </a>
              <div className="social">
                <div className="social-logo-cont">
                  <div className="social-logo">
                    <PersonOffOutlined className="icon" />
                  </div>
                  <div className="text">12</div>
                </div>
                <div className="social-logo-cont">
                  <div className="social-logo">
                    <ImportContactsRounded className="icon" />
                  </div>
                  <div className="text">12</div>
                </div>{" "}
                <div className="social-logo-cont">
                  <div className="social-logo">
                    <IcecreamTwoTone className="icon" />
                  </div>
                  <div className="text">12</div>
                </div>{" "}
                <div className="social-logo-cont">
                  <div className="social-logo">
                    <InsertCommentRounded className="icon" />
                  </div>
                  <div className="text">12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="status">134 Posts</div>
          {data.map((x, i) => {
            return (
              <Post
                heading={x.heading}
                key={i}
                author={x.author}
                text={x.text}
                id={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
