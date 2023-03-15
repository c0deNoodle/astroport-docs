import React from "react";
import styles from "./styles.module.css";
import ContentBox from "./ContentBox";

export default function Cards({ image, title, text, children }) {
  if (title === "Learn") {
    return <ContentBox title="Learn" />;
  } else if (title === "Govern") {
    return <ContentBox title="Govern" />;
  } else if (title === "Develop") {
    return <ContentBox title="Develop" />;
  } else if (title === "Workstation") {
    return <ContentBox title="Workstation" />;
  } else if (title === "Starter Pack") {
    return <ContentBox title="Starter Pack" />;
  } else if (title === "Creating a Wallet") {
    return <ContentBox title="Creating a Wallet" />;
  } else if (title === "Farmers Fields") {
    return <ContentBox title="Farmers Fields" />;
  } else if (title === "Traders Port") {
    return <ContentBox title="Traders Port" />;
  } else if (title === "Astral Assembly") {
    return <ContentBox title="Astral Assembly" />;
  } else if (title === "Tokenomics") {
    return <ContentBox title="Tokenomics" />;
  } else if (title === "Tutorials") {
    return <ContentBox title="Tutorials" />;
  } else if (title === "Network") {
    return <ContentBox title="Network" />;
  } else if (title === "Trading") {
    return <ContentBox title="Trading" />;
  } else if (title === "Farming") {
    return <ContentBox title="Farming" />;
  } else if (title === "Governance") {
    return <ContentBox title="Governance" />;
  } else if (title === "Bridging Tokens") {
    return <ContentBox title="Bridging Tokens" />;
  }
}
