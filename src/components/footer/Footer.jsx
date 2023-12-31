"use client";

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  console.log("hello");
  return (
    <div className={styles.container}>
      <div>2023 Tech-Blog. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Social icon"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Social icon"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Social icon"
        />
      </div>
    </div>
  );
};

export default Footer;
