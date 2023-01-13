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

const Card = ({ children }) => <div className="max-w-[550px] w-full h-[250px]">{children}</div>;

export default function ContentBox(props) {
  if (props.title == "Learn") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        <Card>
          <a className={styles.links} href="../../docs/learn/astro-pools/astro-pools-intro">
            <div className={styles.box}>
              <img src={AstroPoolsImg} height={76} width={76} className="opacity-50 mt-4" />

              <div>
                <p className={styles.title}>Astro Pools</p>
                <p className={styles.subtext}>Discover the different liquidity pool types of Astroport</p>
                <ul className={styles.list}>
                  <li>
                    <a className={styles.links} href="../../../../docs/learn/astro-pools/constant-product-pools">
                      Constant Product Pools
                    </a>
                  </li>

                  <li>
                    <a className={styles.links} href="../../../../docs/learn/astro-pools/stableswap-pools">
                      Stableswap Pools
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </Card>

        <Card>
          <a className={styles.links} href="../../docs/learn/astro-generators">
            <div className={styles.box}>
              <img src={AstroGeneratorsImg} height={76} width={76} className="opacity-50 self-start mt-4" />

              <div>
                <p className={styles.title}>Astro Generators</p>
                <p className={styles.subtext}>Open the operation manual of Astroports unique Generators</p>
                <ul className={styles.list}>
                  <li>Proxy Contracts</li>
                  <li>Dual Rewards</li>
                </ul>
              </div>
            </div>
          </a>
        </Card>

        <Card>
          <a className={styles.links} href="../../docs/learn/astral-assembly">
            <div className={styles.box}>
              <img src={AstralAssemblyImg} height={76} width={76} className="opacity-50 self-start mt-4" />

              <div>
                <p className={styles.title}>Astral Assembly</p>
                <p className={styles.subtext}>Enter the doors of Astroports governing body, the Astral Assembly</p>
                <ul className={styles.list}>
                  <li>
                    <a className={styles.links} href="../../../../docs/learn/astral-assembly">
                      Overview
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </Card>

        <Card>
          <a className={styles.links} href="../../docs/learn/astro-tokenomics/astro-tokenomics-intro">
            <div className={styles.box}>
              <img src={AstroTokenomicsImg} height={76} width={76} className="opacity-50 self-start mt-4" />

              <div>
                <p className={styles.title}>Astro Tokenomics</p>
                <p className={styles.subtext}>Learn the key insights about the fuel that powers the station: ASTRO</p>
                <ul className={styles.list}>
                  <li>
                    <a className={styles.links} href="../../../../docs/learn/astro-tokenomics/utility">
                      Utility
                    </a>
                  </li>

                  <li>
                    <a className={styles.links} href="../../../../docs/learn/astro-tokenomics/fees">
                      Fees
                    </a>
                  </li>

                  <li>
                    <a className={styles.links} href="../../../../docs/learn/astro-tokenomics/allocation">
                      Allocation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </Card>

        <Card>
          <a className={styles.links} href="../../docs/learn/workstation/workstation-intro">
            <div className={styles.box}>
              <img src={WorkstationImg} height={76} width={76} className="opacity-50 self-start mt-4" />

              <div>
                <p className={styles.title}>Workstation</p>
                <p className={styles.subtext}>
                  Astronaut approved step-by-step tutorials to guide you through the Astroport Web App
                </p>
                <ul className={styles.list}>
                  <li>
                    <a className={styles.links} href="../../../../docs/learn/category/starter-pack">
                      Starter Pack
                    </a>
                  </li>

                  <li>
                    <a className={styles.links} href="../../../../docs/learn/category/farmers-fields">
                      Farmers Fields
                    </a>
                  </li>

                  <li>
                    <a className={styles.links} href="../../../../docs/learn/category/traders-port">
                      Traders Port
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </Card>
      </div>
    );
  } else if (props.title == "Govern") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        <Card>
          <a className={styles.links} href="../../docs/govern/astroport-improvement-proposal-framework">
            <div className={styles.box}>
              <img src={AIPFImg} height={76} width={76} className="opacity-50 self-start mt-4" />

              <div>
                <p className={styles.title}>Astroport Improvement Proposal Framework</p>
                <p className={styles.subtext}>The framework that empowers Assembly participants</p>
                <ul className={styles.list}>
                  <li>AIP Lifecycle</li>
                  <li>AIP Templates</li>
                </ul>
              </div>
            </div>
          </a>
        </Card>
        <Card>
          <a className={styles.links} href="../../docs/govern/astroport-incentive-framework">
            <div className={styles.box}>
              <img src={AIFImg} height={76} width={76} className="opacity-50 self-start mt-4" />

              <div>
                <p className={styles.title}>Astroport Incentive Framework</p>
                <p className={styles.subtext}>The blueprint for ASTRO emissions</p>
                <ul className={styles.list}>
                  <li>Overview</li>
                  <li>AIF Template</li>
                </ul>
              </div>
            </div>
          </a>
        </Card>

        <Card>
          <a className={styles.links} href="../../docs/govern/proposal-messages/proposal-messages-intro">
            <div className={styles.box}>
              <img src={ProposalMessagesImg} height={76} width={76} className="opacity-50 self-start mt-4" />

              <div>
                <p className={styles.title}>Proposal Messages</p>
                <p className={styles.subtext}>Insights and best practices for on-chain governance proposals</p>
                <ul className={styles.list}>
                  <li>
                    <a
                      className={styles.links}
                      href="../../../../docs/govern/proposal-messages/astro-allocation-points"
                    >
                      ASTRO Allocation Points
                    </a>
                  </li>

                  <li>
                    <a className={styles.links} href="../../../../docs/govern/proposal-messages/proxy-contracts">
                      Proxy Contracts
                    </a>
                  </li>

                  <li>
                    <a className={styles.links} href="../../../../docs/govern/proposal-messages/dual-rewards">
                      Dual Rewards
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </Card>
      </div>
    );
  } else if (props.title == "Develop") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        <Card>
          <a className={styles.links} href="../../docs/develop/backend">
            <div className={styles.box}>
              <img src={BackendImg} height={76} width={76} className="opacity-50 self-start mt-4" />

              <div>
                <p className={styles.title}>Backend</p>
                <p className={styles.subtext}>Insights and detailed information on Astroports backend</p>
                <ul className={styles.list}>
                  <li>
                    <a className={styles.links} href="../../../../docs/develop/backend#apy-calculation">
                      APY Calculation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </Card>

        <Card>
          <a className={styles.links} href="../../docs/develop/smart-contracts/smart-contracts-intro">
            <div className={styles.box}>
              <img src={SmartContractsImg} height={76} width={76} className="opacity-50 self-start mt-4" />

              <div>
                <p className={styles.title}>Smart Contracts</p>
                <p className={styles.subtext}>Deep dive into the galactic smart contracts powering Astroport</p>
                <ul className={styles.list}>
                  {/* <li>
            <a className={styles.links} href="../../../../docs/develop/category/smart-contracts">Overview</a>
            </li> */}

                  <li>
                    <a
                      className={styles.links}
                      href="../../../../docs/develop/smart-contracts/astroport-contract-addresses"
                    >
                      Astroport Contract Addresses
                    </a>
                  </li>

                  <li>
                    <a className={styles.links} href="../../../../docs/develop/smart-contracts/factory">
                      Astroport Factory
                    </a>
                  </li>

                  <li>
                    <a
                      className={styles.links}
                      href="../../../../docs/develop/smart-contracts/swap-pairs/swap-pairs-intro"
                    >
                      Swap Pairs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </Card>

        <Card>
          <a className={styles.links} href="../../docs/develop/tutorials/tutorials-intro">
            <div className={styles.box}>
              <img src={TutorialsImg} height={76} width={76} className="opacity-50 self-start mt-4" />

              <div>
                <p className={styles.title}>Tutorials</p>
                <p className={styles.subtext}>Apply and improve your developer skills with hands-on tutorials</p>
                <ul className={styles.list}>
                  <li>
                    <a className={styles.links} href="../../../../docs/develop/category/trading">
                      Trading
                    </a>
                  </li>

                  <li>
                    <a className={styles.links} href="../../../../docs/develop/category/farming">
                      Farming
                    </a>
                  </li>

                  <li>
                    <a className={styles.links} href="../../../../docs/develop/category/governance">
                      Governance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </Card>
      </div>
    );
  }
}
