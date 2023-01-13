import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Box from "./Box";

import AstroPoolsUrl from "@site/static/img/card-icons/astro-pools.png";
import AstroGeneratorsUrl from "@site/static/img/card-icons/astro-generators.png";
import AstralAssemblyUrl from "@site/static/img/card-icons/astral-assembly.png";
import AstroTokenomicsUrl from "@site/static/img/card-icons/astro-tokenomics.png";
import WorkstationUrl from "@site/static/img/card-icons/workstation.png";

import AIPFUrl from "@site/static/img/card-icons/aipf.png";
import AIFUrl from "@site/static/img/card-icons/aif.png";
import ProposalMessagesUrl from "@site/static/img/card-icons/proposal-messages.png";

import BackendUrl from "@site/static/img/card-icons/backend.png";
import SmartContractsUrl from "@site/static/img/card-icons/smart-contracts.png";
import TutorialsUrl from "@site/static/img/card-icons/tutorials.png";

import StarterPackUrl from "@site/static/img/card-icons/astro-rocketship.png";
import FarmersFieldsUrl from "@site/static/img/card-icons/astro-chad.png";
import TradersPortUrl from "@site/static/img/card-icons/pepe-astronaut.png";

// ------------------

import AstroHammerUrl from "../../../static/img/astrohammer.png";
import AstroShieldUrl from "../../../static/img/astroshield.png";
import AstroGeneratorUrl from "../../../static/img/astrogenerator.png";
import TokenUrl from "../../../static/img/token.png";

import ShipUrl from "../../../static/img/ship.png";
import ProposalUrl from "../../../static/img/proposal.png";
import SurpriseUrl from "../../../static/img/surprise.png";

// import BackendUrl from '../../../../static/img/backend.png';
import ContractsUrl from "../../../static/img/contracts.png";

// import LaunchUrl from '../../../static/img/launch.png';

const boxProps = {
  learn: {
    astroPools: {
      title: "Astro Pools",
      description: "Discover the different liquidity pool types of Astroport",
      image: AstroPoolsUrl,
      list: "Astro Pools",
    },
    astroGenerators: {
      title: "Astro Generators",
      description: "Open the operation manual of Astroports unique Generators",
      image: AstroGeneratorsUrl,
      list: "Astro Generators",
    },
    astroAssembly: {
      title: "Astral Assembly",
      description: "Enter the doors of Astroports governing body, the Astral Assembly",
      image: AstralAssemblyUrl,
      list: "Astro Assembly",
    },
    astroTokenomics: {
      title: "Astro Tokenomics",
      description: "Learn the key insights about the fuel that powers the station: ASTRO",
      image: AstroTokenomicsUrl,
      list: "Astro Tokenomics",
    },
    workstation: {
      title: "Workstation",
      description: "Astronaut approved step-by-step tutorials to guide you through the Astroport Web App",
      image: WorkstationUrl,
      list: "Workstation",
    },
  },
  govern: {
    aipf: {
      title: "Astroport Improvement Proposal Framework",
      description: "The framework that empowers Assembly participants",
      image: AIPFUrl,
      list: "AIPF",
    },
    aif: {
      title: "Astroport Incentive Framework",
      description: "The blueprint for ASTRO emissions",
      image: AIFUrl,
      list: "AIF",
    },
    proposalMessages: {
      title: "Proposal Messages",
      description: "Insights and best practices for on-chain governance proposals",
      image: ProposalMessagesUrl,
      list: "Proposal Messages",
    },
  },
  develop: {
    smartContracts: {
      title: "Smart Contracts",
      description: "Deep dive into the galactic smart contracts powering Astroport",
      image: SmartContractsUrl,
      list: "Smart Contracts",
    },
    backend: {
      title: "Backend",
      description: "Insights and detailed information on Astroports backend",
      image: BackendUrl,
      list: "Backend",
    },
    tutorials: {
      title: "Tutorials",
      description: "Apply and improve your developer skills with hands-on tutorials",
      image: TutorialsUrl,
      list: "Tutorials",
    },
  },
};

export default function ContentBox(props) {
  if (props.title == "Learn") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/learn/astro-pools/astro-pools-intro">
            <Box
              title={boxProps.learn.astroPools.title}
              description={boxProps.learn.astroPools.description}
              image={boxProps.learn.astroPools.image}
              list={boxProps.learn.astroPools.list}
            />
          </a>
        </div>

        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/learn/astro-generators">
            <Box
              title={boxProps.learn.astroGenerators.title}
              description={boxProps.learn.astroGenerators.description}
              image={boxProps.learn.astroGenerators.image}
              list={boxProps.learn.astroGenerators.list}
            />
          </a>
        </div>

        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/learn/astral-assembly">
            <Box
              title={boxProps.learn.astroAssembly.title}
              description={boxProps.learn.astroAssembly.description}
              image={boxProps.learn.astroAssembly.image}
              list={boxProps.learn.astroAssembly.list}
            />
          </a>
        </div>

        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/learn/astro-tokenomics/astro-tokenomics-intro">
            <Box
              title={boxProps.learn.astroTokenomics.title}
              description={boxProps.learn.astroTokenomics.description}
              image={boxProps.learn.astroTokenomics.image}
              list={boxProps.learn.astroTokenomics.list}
            />
          </a>
        </div>

        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/learn/workstation/workstation-intro">
            <Box
              title={boxProps.learn.workstation.title}
              description={boxProps.learn.workstation.description}
              image={boxProps.learn.workstation.image}
              list={boxProps.learn.workstation.list}
            />
          </a>
        </div>
      </div>
    );
  } else if (props.title == "Govern") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/govern/astroport-improvement-proposal-framework">
            <Box
              title={boxProps.govern.aipf.title}
              description={boxProps.govern.aipf.description}
              image={boxProps.govern.aipf.image}
              list={boxProps.govern.aipf.list}
            />
          </a>
        </div>

        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/govern/astroport-incentive-framework">
            <Box
              title={boxProps.govern.aif.title}
              description={boxProps.govern.aif.description}
              image={boxProps.govern.aif.image}
              list={boxProps.govern.aif.list}
            />
          </a>
        </div>

        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/govern/proposal-messages/proposal-messages-intro">
            <Box
              title={boxProps.govern.proposalMessages.title}
              description={boxProps.govern.proposalMessages.description}
              image={boxProps.govern.proposalMessages.image}
              list={boxProps.govern.proposalMessages.list}
            />
          </a>
        </div>
      </div>
    );
  } else if (props.title == "Develop") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/develop/backend">
            <Box
              title={boxProps.develop.backend.title}
              description={boxProps.develop.backend.description}
              image={boxProps.develop.backend.image}
              list={boxProps.develop.backend.list}
            />
          </a>
        </div>

        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/develop/smart-contracts/smart-contracts-intro">
            <Box
              title={boxProps.develop.smartContracts.title}
              description={boxProps.develop.smartContracts.description}
              image={boxProps.develop.smartContracts.image}
              list={boxProps.develop.smartContracts.list}
            />
          </a>
        </div>

        <div className="max-w-[550px] w-full h-[250px]">
          <a className={styles.links} href="../../docs/develop/tutorials/tutorials-intro">
            <Box
              title={boxProps.develop.tutorials.title}
              description={boxProps.develop.tutorials.description}
              image={boxProps.develop.tutorials.image}
              list={boxProps.develop.tutorials.list}
            />
          </a>
        </div>
      </div>
    );
  }
}
