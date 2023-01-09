import React from 'react';
import styles from './styles.module.css';
import ContentBox from './ContentBox';

export default function ContentBlocks({ image, title, text, children }) {
  if (title === 'Learn') {
    return (
      <div>
        {/* <h2 className={styles.title}>{title}</h2> */}
        {/* <p className={styles.text}>{text}</p> */}
        <ContentBox title="Learn" />
      </div>
    );
  }

  else if (title === 'Govern') {
    return (
      <div>
        {/* <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p> */}
        <ContentBox title="Govern" />
      </div>
    );
  }

  else if (title === 'Develop') {
    return (
      <div>
        {children}
        {/* <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p> */}
        <ContentBox title="Develop" />
      </div>
    );
  }
  
  else if (title === 'Workstation') {
    return (
      <div>
        {/* <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p> */}
        <ContentBox title="Workstation" />
      </div>
    );
  }

  else if (title === 'Starter Pack') {
    return (
      <div>
        {/* <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p> */}
        <ContentBox title="Starter Pack" />
      </div>
    );
  }

  else if (title === 'Creating a Wallet') {
    return (
      <div>
        {/* <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p> */}
        <ContentBox title="Creating a Wallet" />
      </div>
    );
  }

  else if (title === 'Farmers Fields') {
    return (
      <div>
        {/* <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p> */}
        <ContentBox title="Farmers Fields" />
      </div>
    );
  }

  else if (title === 'Traders Port') {
    return (
      <div>
        {/* <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p> */}
        <ContentBox title="Traders Port" />
      </div>
    );
  }

  else if (title === 'Astral Assembly') {
    return (
      <div>
        {/* <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p> */}
        <ContentBox title="Astral Assembly" />
      </div>
    );
  }

  else if (title === 'Tokenomics') {
    return (
      <div>
        <ContentBox title="Tokenomics" />
      </div>
    );
  }

  else if (title === 'Tutorials') {
    return (
      <div>
        <ContentBox title="Tutorials" />
      </div>
    );
  }


  else if (title === 'Network') {
    return (
      <div>
        <ContentBox title="Network" />
      </div>
    );
  }

  else if (title === 'Trading') {
    return (
      <div>
        <ContentBox title="Trading" />
      </div>
    );
  }

  else if (title === 'Farming') {
    return (
      <div>
        <ContentBox title="Farming" />
      </div>
    );
  }

  else if (title === 'Governance') {
    return (
      <div>
        <ContentBox title="Governance" />
      </div>
    );
  }

}
