import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Box from './Box';

import AstroHammerUrl from '../../../../static/img/astrohammer.png';
import AstroShieldUrl from '../../../../static/img/astroshield.png';
import AstroGeneratorUrl from '../../../../static/img/astrogenerator.png';
import TokenUrl from '../../../../static/img/token.png';

import ShipUrl from '../../../../static/img/ship.png';
import ProposalUrl from '../../../../static/img/proposal.png';
import SurpriseUrl from '../../../../static/img/surprise.png';

import BackendUrl from '../../../../static/img/backend.png';
import ContractsUrl from '../../../../static/img/contracts.png';

// import LaunchUrl from '../../../static/img/launch.png';

const boxProps = {
  learn: {
    astroPools: {
      title: "Astro Pools", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: AstroShieldUrl, 
      list: "Astro Pools"
    }, 
    astroGenerators: {
      title: "Astro Generators", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: AstroGeneratorUrl, 
      list: "Astro Generators"
    }, 
    astroAssembly: {
      title: "Astro Assembly", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: AstroHammerUrl, 
      list: "Astro Assembly"
    }, 
    astroTokenomics: {
      title: "Astro Tokenomics", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: TokenUrl, 
      list: "Astro Tokenomics"
    }
  },
  govern: {
    aipf: {
      title: "Astroport Improvement Proposal Framework", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: ProposalUrl, 
      list: "AIPF"
    }, 
    aif: {
      title: "Astroport Incentive Framework", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: SurpriseUrl, 
      list: "AIF"
    }, 
    proposalMessages: {
      title: "Proposal Messages", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: ShipUrl, 
      list: "Proposal Messages"
    }
  }, 
  develop: {
    smartContracts: {
      title: "Smart Contracts", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: ContractsUrl, 
      list: "Smart Contracts"
    }, 
    backend: {
      title: "Backend", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: BackendUrl, 
      list: "Backend"
    }
  }
}

export default function ContentBox(props) {

  if (props.title == 'Getting Started') {
    return (
      <div className={styles.box}>
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    );
  } else if (props.title == "Learn") {
    return (
      <div className={styles.box}>
        <Box 
        title={boxProps.learn.astroPools.title}
        description={boxProps.learn.astroPools.description}
        image={boxProps.learn.astroPools.image}
        list={boxProps.learn.astroPools.list}
        />
        <Box 
        title={boxProps.learn.astroGenerators.title}
        description={boxProps.learn.astroGenerators.description}
        image={boxProps.learn.astroGenerators.image}
        list={boxProps.learn.astroGenerators.list}
        />
        <Box 
        title={boxProps.learn.astroAssembly.title}
        description={boxProps.learn.astroAssembly.description}
        image={boxProps.learn.astroAssembly.image}
        list={boxProps.learn.astroAssembly.list}
        />
        <Box 
        title={boxProps.learn.astroTokenomics.title}
        description={boxProps.learn.astroTokenomics.description}
        image={boxProps.learn.astroTokenomics.image}
        list={boxProps.learn.astroTokenomics.list}
        />
      </div>
    );
  } else if (props.title == 'Govern') {
    return (
      <div className={styles.box}>
        <Box 
        title={boxProps.govern.aipf.title}
        description={boxProps.govern.aipf.description}
        image={boxProps.govern.aipf.image}
        list={boxProps.govern.aipf.list}
        />
        <Box 
        title={boxProps.govern.aif.title}
        description={boxProps.govern.aif.description}
        image={boxProps.govern.aif.image}
        list={boxProps.govern.aif.list}
        />
        <Box 
        title={boxProps.govern.proposalMessages.title}
        description={boxProps.govern.proposalMessages.description}
        image={boxProps.govern.proposalMessages.image}
        list={boxProps.govern.proposalMessages.list}
        />
      </div>
    );
  } else if (props.title == 'Develop') {
    return (
      <div className={styles.box}>
        <Box 
        title={boxProps.develop.smartContracts.title}
        description={boxProps.develop.smartContracts.description}
        image={boxProps.develop.smartContracts.image}
        list={boxProps.develop.smartContracts.list}
        />
        <Box 
        title={boxProps.develop.backend.title}
        description={boxProps.develop.backend.description}
        image={boxProps.develop.backend.image}
        list={boxProps.develop.backend.list}
        />
      </div>
    );
  }

}