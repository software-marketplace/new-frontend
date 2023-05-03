// this is the route page after onclick of For developer page in Navbar2

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import styles from "../develperDashboard/DeveloperDashboard.module.css";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import FlareIcon from "@mui/icons-material/Flare";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Navbar from "../../components/Navbar/Navbar";

export default function DeveloperDashbord() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className={styles.left}>
          <h2 className={styles.LeftSideContent}>
            <span className={styles.a}>
              <FlareIcon />
            </span>
            Devhustle
          </h2>
          <h4 className={styles.SideContent}>ORGANISATION</h4>
          <span className={styles.SideContent}>
            <span>
              {" "}
              <HomeOutlinedIcon />
            </span>
            LOREM IPSUM
          </span>
          <span className={styles.SideContent}>
            <span>
              {" "}
              <HomeOutlinedIcon />
            </span>
            LOREM IPSUM
          </span>
          <h4 className={styles.SideContent}>ORGANISATION</h4>
          <span className={styles.SideContent}>
            <span>
              <HomeOutlinedIcon />
            </span>
            LOREM IPSUM
          </span>
          <span className={styles.SideContent}>
            <span>
              <HomeOutlinedIcon />
            </span>
            LOREM IPSUM
          </span>
          <span className={styles.SideContent}>
            <span>
              <HomeOutlinedIcon />
            </span>
            LOREM IPSUM
          </span>
          <span className={styles.SideContent}>
            <span>
              <HomeOutlinedIcon />
            </span>
            LOREM IPSUM
          </span>

          <div className={styles.right}>{/* <BottomModal /> */}</div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
