import React from "react";
import styles from "./styles.module.css";
import ContentBox from "./ContentBox";

const subheaderClasses = "opacity-60 md:px-[20%] mb-10 text-lg text-center";

export default function ContentBlocks({ image, title, text, children }) {
  if (title === "Learn") {
    return (
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={subheaderClasses}>{text}</p>
        <ContentBox title="Learn" />
      </div>
    );
  }

  else if (title === 'Govern') {
    return (
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <ContentBox title="Govern" />
      </div>
    );
  }

  else return (
    <div>
      {children}
      <h2 className={styles.title}>{title}</h2>
      <p className={subheaderClasses}>{text}</p>
      <ContentBox title="Develop" />
    </div>
  );
}
