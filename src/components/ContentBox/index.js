import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
// import Box from "./Box";

import AstroPoolsImg from "@site/static/img/card-icons/astro-pools.png";
import AstroGeneratorsImg from "@site/static/img/card-icons/astro-generators.png";
import AstralAssemblyImg from "@site/static/img/card-icons/astral-assembly.png";
import AstroTokenomicsImg from "@site/static/img/card-icons/astro-tokenomics.png";
import WorkstationImg from "@site/static/img/card-icons/workstation.png";

import AIPFImg from "@site/static/img/card-icons/aipf.png";
import AIFImg from "@site/static/img/card-icons/aif.png";
import ProposalMessagesImg from "@site/static/img/card-icons/proposal-messages.png";

import BackendImg from "@site/static/img/card-icons/backend.png";
import SmartContractsImg from "@site/static/img/card-icons/smart-contracts.png";
import TutorialsImg from "@site/static/img/card-icons/tutorials.png";

import StarterPackImg from "@site/static/img/card-icons/astro-rocketship.png";
import FarmersFieldsImg from "@site/static/img/card-icons/astro-chad.png";
import TradersPortImg from "@site/static/img/card-icons/pepe-astronaut.png";

// ------------------

import AstroHammerImg from "../../../static/img/astrohammer.png";
import AstroShieldImg from "../../../static/img/astroshield.png";
import AstroGeneratorImg from "../../../static/img/astrogenerator.png";
import TokenImg from "../../../static/img/token.png";

import ShipImg from "../../../static/img/ship.png";
import ProposalImg from "../../../static/img/proposal.png";
import SurpriseImg from "../../../static/img/surprise.png";

// import BackendImg from '../../../../static/img/backend.png';
import ContractsImg from "../../../static/img/contracts.png";

// import LaunchImg from '../../../static/img/launch.png';

const learnContent = [
  {
    title: "Astro Pools",
    description: "Discover the different liquidity pool types of Astroport",
    image: AstroPoolsImg,
    listItems: [
      {
        href: "../../../../docs/learn/astro-pools/constant-product-pools",
        label: "Constant Product Pools",
      },

      {
        href: "../../../../docs/learn/astro-pools/stableswap-pools",
        label: "Stableswap Pools",
      },
    ],
  },
  {
    title: "Astro Generators",
    description: "Open the operation manual of Astroports unique Generators",
    image: AstroGeneratorsImg,
    listItems: [{ label: "Overview", href: "../../../../docs/learn/astro-generators" }, { label: "Dual Liquidity Mining", href: "../../../../docs/learn/astro-generators#dual-liquidity-mining" }],
  },
  {
    title: "Astral Assembly",
    description: "Enter the doors of Astroports governing body, the Astral Assembly",
    image: AstralAssemblyImg,
    listItems: [
      {
        href: "../../../../docs/learn/astral-assembly",
        label: "Overview",
      },
    ],
  },
  {
    title: "Astro Tokenomics",
    description: "Learn the key insights about the fuel that powers the station: ASTRO",
    image: AstroTokenomicsImg,
    listItems: [
      {
        href: "../../../../docs/learn/astro-tokenomics/utility",
        label: "Utility",
      },

      {
        href: "../../../../docs/learn/astro-tokenomics/fees",
        label: "Fees",
      },

      {
        href: "../../../../docs/learn/astro-tokenomics/allocation",
        label: "Allocation",
      },
    ],
  },
  {
    title: "Workstation",
    description: "Astronaut approved step-by-step tutorials to guide you through the Astroport Web App",
    image: WorkstationImg,
    listItems: [
      {
        href: "../../../../docs/learn/category/starter-pack",
        label: "Starter Pack",
      },

      {
        href: "../../../../docs/learn/category/farmers-fields",
        label: "Farmers Fields",
      },

      {
        href: "../../../../docs/learn/category/traders-port",
        label: "Traders Port",
      },
    ],
  },
];

const governContent = [
  {
    title: "Astroport Improvement Proposal Framework",
    description: "The framework that empowers Assembly participants",
    image: AIPFImg,
    listItems: [{ label: "AIP Lifecycle" }, { label: "AIP Templates" }],
  },
  {
    title: "Astroport Incentive Framework",
    description: "The blueprint for ASTRO emissions",
    image: AIFImg,
    listItems: [{ label: "Overview" }, { label: "AIF Template" }],
  },
  {
    title: "Proposal Messages",
    description: "Insights and best practices for on-chain governance proposals",
    image: ProposalMessagesImg,
    listItems: [
      {
        href: "../../../../docs/govern/proposal-messages/astro-allocation-points",
        label: "ASTRO Allocation Points",
      },

      {
        href: "../../../../docs/govern/proposal-messages/proxy-contracts",
        label: "Proxy Contracts",
      },

      {
        href: "../../../../docs/govern/proposal-messages/dual-rewards",
        label: "Dual Rewards",
      },
    ],
  },
];

const developContent = [
  {
    title: "Smart Contracts",
    description: "Deep dive into the galactic smart contracts powering Astroport",
    image: SmartContractsImg,
    listItems: [
      {
        href: "../../../../docs/develop/smart-contracts/astroport-contract-addresses",
        label: "Astroport Contract Addresses",
      },

      {
        href: "../../../../docs/develop/smart-contracts/factory",
        label: "Astroport Factory",
      },

      {
        href: "../../../../docs/develop/smart-contracts/swap-pairs/swap-pairs-intro",
        label: "Swap Pairs",
      },
    ],
  },
  {
    title: "Backend",
    description: "Insights and detailed information on Astroports backend",
    image: BackendImg,
    listItems: [
      {
        label: "APY Calculation",
        href: "../../../../docs/develop/backend#apy-calculation",
      },
    ],
  },
  {
    title: "Tutorials",
    description: "Apply and improve your developer skills with hands-on tutorials",
    image: TutorialsImg,
    listItems: [
      {
        href: "../../../../docs/develop/tutorials/trading/trading-intro",
        label: "Trading",
      },

      {
        href: "../../../../docs/develop/tutorials/farming/farming-intro",
        label: "Farming",
      },

      {
        href: "../../../../docs/develop/tutorials/governance/governance-intro",
        label: "Governance",
      },
    ],
  },
];

const Card = ({ children }) => <div className="max-w-[550px] w-full h-[250px]">{children}</div>;

export default function ContentBox(props) {
  if (props.title == "Learn") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {learnContent.map((entry) => (
          <Card key={entry.title}>
            {/* <a className={styles.links} href="../../docs/develop/backend"> */}
              <div className={styles.box}>
                <img src={entry.image} height={76} width={76} className="opacity-50 self-start mt-4" />

                <div>
                  <p className={styles.title}>{entry.title}</p>
                  <p className={styles.subtext}>{entry.description}</p>
                  <ul className={styles.list}>
                    {entry.listItems.map((item) => (
                      <li key={item.label}>
                        <a className={styles.links} href={item.href}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            {/* </a> */}
          </Card>
        ))}
      </div>
    );
  } else if (props.title == "Govern") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {governContent.map((entry) => (
          <Card key={entry.title}>
            {/* <a className={styles.links} href="../../docs/develop/backend"> */}
              <div className={styles.box}>
                <img src={entry.image} height={76} width={76} className="opacity-50 self-start mt-4" />

                <div>
                  <p className={styles.title}>{entry.title}</p>
                  <p className={styles.subtext}>{entry.description}</p>
                  <ul className={styles.list}>
                    {entry.listItems.map((item) => (
                      <li key={item.label}>
                        <a className={styles.links} href={item.href}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            {/* </a> */}
          </Card>
        ))}
      </div>
    );
  } else if (props.title == "Develop") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {developContent.map((entry) => (
          <Card key={entry.title}>
            {/* <a className={styles.links} href="../../docs/develop/backend"> */}
              <div className={styles.box}>
                <img src={entry.image} height={76} width={76} className="opacity-50 self-start mt-4" />

                <div>
                  <p className={styles.title}>{entry.title}</p>
                  <p className={styles.subtext}>{entry.description}</p>
                  <ul className={styles.list}>
                    {entry.listItems.map((item) => (
                      <li key={item.label}>
                        <a className={styles.links} href={item.href}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            {/* </a> */}
          </Card>
        ))}
      </div>
    );
  }
}
