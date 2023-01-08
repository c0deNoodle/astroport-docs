import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Box from './Box';

import AstroPoolsUrl from '@site/static/img/card-icons/astro-pools.png';
import AstroGeneratorsUrl from '@site/static/img/card-icons/astro-generators.png';
import AstralAssemblyUrl from '@site/static/img/card-icons/astral-assembly.png';
import AstroTokenomicsUrl from '@site/static/img/card-icons/astro-tokenomics.png';
import WorkstationUrl from '@site/static/img/card-icons/workstation.png';

import AIPFUrl from '@site/static/img/card-icons/aipf.png';
import AIFUrl from '@site/static/img/card-icons/aif.png';
import ProposalMessagesUrl from '@site/static/img/card-icons/proposal-messages.png';

import BackendUrl from '@site/static/img/card-icons/backend.png';
import SmartContractsUrl from '@site/static/img/card-icons/smart-contracts.png';
import TutorialsUrl from '@site/static/img/card-icons/tutorials.png';

import StarterPackUrl from '@site/static/img/card-icons/astro-rocketship.png';
import FarmersFieldsUrl from '@site/static/img/card-icons/astro-chad.png';
import TradersPortUrl from '@site/static/img/card-icons/pepe-astronaut.png';

import SearchPepeUrl from '@site/static/img/card-icons/backend.png';
import SurprisePepeUrl from '@site/static/img/card-icons/pepe-surprise.png';
import CheersPepeUrl from '@site/static/img/card-icons/pepe-cheers.png';

import TerraStationUrl from '@site/static/img/card-icons/terra-station.png';
import KeplrUrl from '@site/static/img/card-icons/keplr.png';

import PoolUrl from '@site/static/img/card-icons/astro-pools.png';
import TokenUrl from '@site/static/img/card-icons/astro-tokenomics.png';
import GeneratorUrl from '@site/static/img/card-icons/astro-generators.png';

import AstroChadUrl from '@site/static/img/card-icons/astro-chad.png';
import SmartPepeUrl from '@site/static/img/card-icons/smart-contracts.png';

import ProposalUrl from '@site/static/img/card-icons/proposal-messages.png';
import MessengerUrl from '@site/static/img/card-icons/aif.png';

import xASTROUrl from '@site/static/img/card-icons/xastro.png';

import AstroShield from '@site/static/img/card-icons/astro-shield.png';
import VestingUrl from '@site/static/img/card-icons/vesting.png';

const boxProps = {
  learn: {
    astroPools: {
      title: 'Astro Pools',
      description:
        'Discover the different liquidity pool types of Astroport',
      image: AstroPoolsUrl,
      list: 'Astro Pools',
    },
    astroGenerators: {
      title: 'Astro Generators',
      description:
        'Open the operation manual of Astroports unique Generators',
      image: AstroGeneratorsUrl,
      list: 'Astro Generators',
    },
    astroAssembly: {
      title: 'Astral Assembly',
      description:
        'Enter the doors of Astroports governing body, the Astral Assembly',
      image: AstralAssemblyUrl,
      list: 'Astro Assembly',
    },
    astroTokenomics: {
      title: 'Astro Tokenomics',
      description:
        'Learn the key insights about the fuel that powers the station: ASTRO',
      image: AstroTokenomicsUrl,
      list: 'Astro Tokenomics',
    },
    workstation: {
      title: 'Workstation', 
      description: 'Astronaut approved step-by-step tutorials for the Astroport Web App', 
      image: WorkstationUrl, 
      list: 'Workstation'
    }
  },
  govern: {
    aipf: {
      title: 'Astroport Improvement Proposal Framework',
      description:
        'The framework that empowers Assembly participants',
      image: AIPFUrl,
      list: 'AIPF',
    },
    aif: {
      title: 'Astroport Incentive Framework',
      description:
        'A blueprint for submitting ASTRO emission proposals',
      image: AIFUrl,
      list: 'AIF',
    },
    proposalMessages: {
      title: 'Proposal Messages',
      description:
        'Insights and best practices for on-chain governance proposals',
      image: ProposalMessagesUrl,
      list: 'Proposal Messages',
    },
  },
  develop: {
    smartContracts: {
      title: 'Smart Contracts',
      description:
        'Deep dive into the galactic smart contracts powering Astroport',
      image: SmartContractsUrl,
      list: 'Smart Contracts',
    },
    backend: {
      title: 'Backend',
      description:
        'Insights and detailed information on Astroports backend',
      image: BackendUrl,
      list: 'Backend',
    },
    tutorials: {
      title: 'Tutorials', 
      description: 'Apply and improve your developer skills with hands-on tutorials', 
      image: TutorialsUrl, 
      list: 'Tutorials'
    }
  },
  workstation: {
    starterPack: {
      title: 'Starter Pack', 
      description: 'Everything about Cosmos wallets and connecting to the Astroport Web App',
      image: StarterPackUrl, 
      list: 'Starter Pack'
    }, 
    farmersFields: {
      title: 'Farmers Fields', 
      description: 'Learn how to create pools, provide liquidity, stake LP tokens, and more',
      image: FarmersFieldsUrl, 
      list: 'Farmers Fields'
    }, 
    tradersPort: {
      title: 'Traders Port', 
      description: 'Discover permissionless trading using the Astroport Web App',
      image: TradersPortUrl, 
      list: 'Traders Port'
    }, 
    astralAssembly: {
      title: 'Astral Assembly', 
      description: 'Participate in Astroports governing body, the Astral Assembly',
      image: AstralAssemblyUrl, 
      list: 'Astral Assembly'
    }
  }, 
  starterPack: {
    creatingAWallet: {
      title: 'Creating a Wallet', 
      description: 'From zero to hero: learn the basics of creating a Cosmos wallet',
      image: SearchPepeUrl, 
      list: 'Creating a Wallet'
    }, 
    fundingAWallet: {
      title: 'Funding a Wallet', 
      description: 'Getting started with funding your new wallet',
      image: SurprisePepeUrl, 
      list: 'Funding a Wallet'
    },
    connectingAWallet: {
      title: 'Connecting a Wallet', 
      description: 'Connect your new wallet to the Astroport Web App',
      image: CheersPepeUrl, 
      list: 'Connecting a Wallet'
    },
  }, 
  creatingAWallet: {
    terraStation: {
      title: 'Terra Station', 
      description: 'Create a Terra Station wallet',
      image: TerraStationUrl, 
      list: 'Terra Station'
    }, 
    keplr: {
      title: 'Keplr', 
      description: 'Create a Keplr wallet',
      image: KeplrUrl, 
      list: 'Keplr'
    }
  }, 
  farmersFields: {
    creatingAPool: {
      title: 'Creating a Pool', 
      description: 'Learn how to create the different liquidity pool types of Astroport',
      image: PoolUrl, 
      list: 'Creating a Pool'
    },
    depositingWithdrawingLiquidity: {
      title: 'Depositing/Withdrawing Liquidity', 
      description: 'Discover how to manage your liquidity',
      image: TokenUrl, 
      list: 'Depositing/Withdrawing Liquidity'
    }, 
    stakingUnstakingLPTokens: {
      title: 'Staking/Unstaking LP Tokens', 
      description: 'Do more with your LP tokens',
      image: GeneratorUrl, 
      list: 'Staking/Unstaking LP Tokens'
    }
  }, 
  tradersPort: {
    swap: {
      title: 'Swap', 
      description: 'Your journey into the art of swapping begins here',
      image: AstroChadUrl, 
      list: 'Swap'
    }, 
    limitOrder: {
      title: 'Limit Orders', 
      description: 'Learn how to set limit orders and advance your trading skills',
      image: SmartPepeUrl, 
      list: 'Limit Orders'
    }
  }, 
  astralAssembly: {
    stakingUnstakingASTROxASTRO: {
      title: 'Staking/Unstaking', 
      description: 'Discover how to join the Astral Assembly and stake ASTRO',
      image: TokenUrl, 
      list: 'Staking/Unstaking'
    }, 
    submittingAProposal: {
      title: 'Submitting a Proposal', 
      description: 'Learn how to submit on-chain proposals',
      image: ProposalUrl, 
      list: 'Submitting a Proposal'
    }, 
    voting: {
      title: 'Voting', 
      description: 'Take part in the governance process of the Astral Assembly',
      image: MessengerUrl, 
      list: 'Voting'
    }
  }, 
  tokenomics: {
    generator: {
      title: 'Generator', 
      description: 'Allocates ASTRO for various LP tokens and distributes them pro-rata to LP stakers',
      image: GeneratorUrl, 
      list: 'Generator'
    }, 
    generatorProxy: {
      title: 'Generator Proxy', 
      description: 'Allows an external staking contract to be connected to the Generator',
      image: MessengerUrl, 
      list: 'Generator Proxy'
    }, 
    maker: {
      title: 'Maker', 
      description: 'Collects part of Astroports pair fees (according to the factorys maker fee)',
      image: AstroShield, 
      list: 'Maker'
    }, 
    staking: {
      title: 'Staking', 
      description: 'Allows ASTRO holders to stake their tokens in exchange for xASTRO',
      image: TokenUrl, 
      list: 'Staking'
    }, 
    vesting: {
      title: 'Vesting', 
      description: 'Progressively unlocks ASTRO that can then be distributed to LP stakers',
      image: VestingUrl, 
      list: 'Voting'
    },
    xastroToken: {
      title: 'xASTRO Token', 
      description: 'The Astroport xASTRO token implementation',
      image: xASTROUrl, 
      list: 'xASTRO Token'
    }
  }
};

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
  } else if (props.title == 'Learn') {
    return (
      <div className={styles.box}>
        <a
          className={styles.links}
          href="../../../docs/learn/astro-pools/astro-pools-intro"
        >
          <Box
            title={boxProps.learn.astroPools.title}
            description={boxProps.learn.astroPools.description}
            image={boxProps.learn.astroPools.image}
            list={boxProps.learn.astroPools.list}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/astro-generators">
          <Box
            title={boxProps.learn.astroGenerators.title}
            description={boxProps.learn.astroGenerators.description}
            image={boxProps.learn.astroGenerators.image}
            list={boxProps.learn.astroGenerators.list}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/astral-assembly">
          <Box
            title={boxProps.learn.astroAssembly.title}
            description={boxProps.learn.astroAssembly.description}
            image={boxProps.learn.astroAssembly.image}
            list={boxProps.learn.astroAssembly.list}
          />
        </a>

        <a
          className={styles.links}
          href="../../../docs/learn/astro-tokenomics/astro-tokenomics-intro"
        >
          <Box
            title={boxProps.learn.astroTokenomics.title}
            description={boxProps.learn.astroTokenomics.description}
            image={boxProps.learn.astroTokenomics.image}
            list={boxProps.learn.astroTokenomics.list}
          />
        </a>

        <a
          className={styles.links}
          href="../../../docs/learn/workstation/workstation-intro"
        >
          <Box
            title={boxProps.learn.workstation.title}
            description={boxProps.learn.workstation.description}
            image={boxProps.learn.workstation.image}
            list={boxProps.learn.workstation.list}
          />
        </a>

      </div>
    );
  } else if (props.title == 'Govern') {
    return (
      <div className={styles.box}>

        <div>
          <a
            className={styles.links}
            href="../../../docs/govern/astroport-improvement-proposal-framework"
          >
            <Box
              title={boxProps.govern.aipf.title}
              description={boxProps.govern.aipf.description}
              image={boxProps.govern.aipf.image}
              list={boxProps.govern.aipf.list}
            />
          </a>
        </div>

        <div>
          <a
            className={styles.links}
            href="../../../docs/govern/astroport-incentive-framework"
          >
            <Box
              title={boxProps.govern.aif.title}
              description={boxProps.govern.aif.description}
              image={boxProps.govern.aif.image}
              list={boxProps.govern.aif.list}
            />
          </a>
        </div>

        <div>
          <a
            className={styles.links}
            href="../../../docs/govern/proposal-messages/proposal-messages-intro"
          >
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
  } else if (props.title == 'Develop') {
    return (
      <div className={styles.box}>


        <div>
          <a
            className={styles.links}
            href="../../../docs/develop/backend"
          >
            <Box
              title={boxProps.develop.backend.title}
              description={boxProps.develop.backend.description}
              image={boxProps.develop.backend.image}
              list={boxProps.develop.backend.list}
            />
          </a>
        </div>

        <div>
          <a
            className={styles.links}
            href="../../../docs/develop/smart-contracts/smart-contracts-intro"
          >
            <Box
              title={boxProps.develop.smartContracts.title}
              description={boxProps.develop.smartContracts.description}
              image={boxProps.develop.smartContracts.image}
              list={boxProps.develop.smartContracts.list}
            />
          </a>
        </div>

        <div>
          <a
            className={styles.links}
            href="../../../docs/develop/tutorials/tutorials-intro"
          >
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

  else if (props.title == 'Workstation') {
    return (
      <div className={styles.box}>

        <a
          className={styles.links}
          href="../../../docs/learn/workstation/starter-pack/starter-pack-intro"
        >
          <Box
            title={boxProps.workstation.starterPack.title}
            description={boxProps.workstation.starterPack.description}
            image={boxProps.workstation.starterPack.image}
            list={boxProps.workstation.starterPack.list}
          />
        </a>

        <a
          className={styles.links}
          href="../../../docs/learn/workstation/farmers-fields/farmers-fields-intro"
        >
          <Box
            title={boxProps.workstation.farmersFields.title}
            description={boxProps.workstation.farmersFields.description}
            image={boxProps.workstation.farmersFields.image}
            list={boxProps.workstation.farmersFields.list}
          />
        </a>

        <a
          className={styles.links}
          href="../../../docs/learn/workstation/traders-port/traders-port-intro"
        >
          <Box
            title={boxProps.workstation.tradersPort.title}
            description={boxProps.workstation.tradersPort.description}
            image={boxProps.workstation.tradersPort.image}
            list={boxProps.workstation.tradersPort.list}
          />
        </a>

        <a
          className={styles.links}
          href="../../../docs/learn/workstation/astral-assembly/astral-assembly-intro"
        >
          <Box
            title={boxProps.workstation.astralAssembly.title}
            description={boxProps.workstation.astralAssembly.description}
            image={boxProps.workstation.astralAssembly.image}
            list={boxProps.workstation.astralAssembly.list}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Starter Pack') {
    return (
      <div className={styles.box}>


          <a
            className={styles.links}
            href="../../../learn/workstation/starter-pack/creating-a-wallet/creating-a-wallet-intro"
          >
            <Box
              title={boxProps.starterPack.creatingAWallet.title}
              description={boxProps.starterPack.creatingAWallet.description}
              image={boxProps.starterPack.creatingAWallet.image}
              list={boxProps.starterPack.creatingAWallet.list}
            />
          </a>


        <a
          className={styles.links}
          href="../../../learn/workstation/starter-pack/funding-a-wallet"
        >
        <Box
          title={boxProps.starterPack.fundingAWallet.title}
          description={boxProps.starterPack.fundingAWallet.description}
          image={boxProps.starterPack.fundingAWallet.image}
          list={boxProps.starterPack.fundingAWallet.list}
        />
        </a>

        <a
          className={styles.links}
          href="../../../learn/workstation/starter-pack/connecting-a-wallet"
        >
        <Box
          title={boxProps.starterPack.connectingAWallet.title}
          description={boxProps.starterPack.connectingAWallet.description}
          image={boxProps.starterPack.connectingAWallet.image}
          list={boxProps.starterPack.connectingAWallet.list}
        />
        </a>
      </div>


    )
  }

  else if (props.title == 'Creating a Wallet') {
    return (
      <div className={styles.box}>


          <a
            className={styles.links}
            href="../../../workstation/starter-pack/creating-a-wallet/terra-station"
          >
            <Box
              title={boxProps.creatingAWallet.terraStation.title}
              description={boxProps.creatingAWallet.terraStation.description}
              image={boxProps.creatingAWallet.terraStation.image}
              list={boxProps.creatingAWallet.terraStation.list}
            />
          </a>



        <a
          className={styles.links}
          href="../../../workstation/starter-pack/creating-a-wallet/keplr"
        >
        <Box
          title={boxProps.creatingAWallet.keplr.title}
          description={boxProps.creatingAWallet.keplr.description}
          image={boxProps.creatingAWallet.keplr.image}
          list={boxProps.creatingAWallet.keplr.list}
        />
        </a>

      </div>
    )
  }

  else if (props.title == 'Farmers Fields') {
    return (
      <div className={styles.box}>


        <a
          className={styles.links}
          href="../../../learn/workstation/farmers-fields/creating-a-pool"
        >
          <Box
            title={boxProps.farmersFields.creatingAPool.title}
            description={boxProps.farmersFields.creatingAPool.description}
            image={boxProps.farmersFields.creatingAPool.image}
            list={boxProps.farmersFields.creatingAPool.list}
          />
        </a>

        <a
          className={styles.links}
          href="../../../learn/workstation/farmers-fields/depositing-withdrawing-liquidity"
        >
        <Box
          title={boxProps.farmersFields.depositingWithdrawingLiquidity.title}
          description={boxProps.farmersFields.depositingWithdrawingLiquidity.description}
          image={boxProps.farmersFields.depositingWithdrawingLiquidity.image}
          list={boxProps.farmersFields.depositingWithdrawingLiquidity.list}
        />
        </a>

        <a
          className={styles.links}
          href="../../../learn/workstation/farmers-fields/staking-unstaking-lp-tokens"
        >
        <Box
          title={boxProps.farmersFields.stakingUnstakingLPTokens.title}
          description={boxProps.farmersFields.stakingUnstakingLPTokens.description}
          image={boxProps.farmersFields.stakingUnstakingLPTokens.image}
          list={boxProps.farmersFields.stakingUnstakingLPTokens.list}
        />
        </a>

      </div>
    )
  }


  else if (props.title == 'Traders Port') {
    return (
      <div className={styles.box}>


          <a
            className={styles.links}
            href="../../../learn/workstation/traders-port/swap"
          >
            <Box
              title={boxProps.tradersPort.swap.title}
              description={boxProps.tradersPort.swap.description}
              image={boxProps.tradersPort.swap.image}
              list={boxProps.tradersPort.swap.list}
            />
          </a>



        <a
          className={styles.links}
          href="../../../learn/workstation/traders-port/limit-orders"
        >
        <Box
          title={boxProps.tradersPort.limitOrder.title}
          description={boxProps.tradersPort.limitOrder.description}
          image={boxProps.tradersPort.limitOrder.image}
          list={boxProps.tradersPort.limitOrder.list}
        />
        </a>

      </div>
    )
  }

  else if (props.title == 'Astral Assembly') {
    return (
      <div className={styles.box}>


        <a
          className={styles.links}
          href="../../../learn/workstation/astral-assembly/staking-unstaking"
        >
          <Box
            title={boxProps.astralAssembly.stakingUnstakingASTROxASTRO.title}
            description={boxProps.astralAssembly.stakingUnstakingASTROxASTRO.description}
            image={boxProps.astralAssembly.stakingUnstakingASTROxASTRO.image}
            list={boxProps.astralAssembly.stakingUnstakingASTROxASTRO.list}
          />
        </a>

        <a
          className={styles.links}
          href="../../../learn/workstation/astral-assembly/submitting-a-proposal"
        >
        <Box
          title={boxProps.astralAssembly.submittingAProposal.title}
          description={boxProps.astralAssembly.submittingAProposal.description}
          image={boxProps.astralAssembly.submittingAProposal.image}
          list={boxProps.astralAssembly.submittingAProposal.list}
        />
        </a>

        <a
          className={styles.links}
          href="../../../learn/workstation/astral-assembly/voting"
        >
        <Box
          title={boxProps.astralAssembly.voting.title}
          description={boxProps.astralAssembly.voting.description}
          image={boxProps.astralAssembly.voting.image}
          list={boxProps.astralAssembly.voting.list}
        />
        </a>

      </div>
    )
  }


  else if (props.title == 'Tokenomics') {
    return (
      <div className={styles.box}>


        <a
          className={styles.links}
          href="../../../develop/smart-contracts/tokenomics/generator"
        >
          <Box
            title={boxProps.tokenomics.generator.title}
            description={boxProps.tokenomics.generator.description}
            image={boxProps.tokenomics.generator.image}
            list={boxProps.tokenomics.generator.list}
          />
        </a>

        <a
          className={styles.links}
          href="../../../develop/smart-contracts/tokenomics/generator-proxy"
        >
        <Box
          title={boxProps.tokenomics.generatorProxy.title}
          description={boxProps.tokenomics.generatorProxy.description}
          image={boxProps.tokenomics.generatorProxy.image}
          list={boxProps.tokenomics.generatorProxy.list}
        />
        </a>

        <a
          className={styles.links}
          href="../../../develop/smart-contracts/tokenomics/maker"
        >
        <Box
          title={boxProps.tokenomics.maker.title}
          description={boxProps.tokenomics.maker.description}
          image={boxProps.tokenomics.maker.image}
          list={boxProps.tokenomics.maker.list}
        />
        </a>

        <a
          className={styles.links}
          href="../../../develop/smart-contracts/tokenomics/staking"
        >
          <Box
            title={boxProps.tokenomics.staking.title}
            description={boxProps.tokenomics.staking.description}
            image={boxProps.tokenomics.staking.image}
            list={boxProps.tokenomics.staking.list}
          />
        </a>

        <a
          className={styles.links}
          href="../../../develop/smart-contracts/tokenomics/vesting"
        >
        <Box
          title={boxProps.tokenomics.vesting.title}
          description={boxProps.tokenomics.vesting.description}
          image={boxProps.tokenomics.vesting.image}
          list={boxProps.tokenomics.vesting.list}
        />
        </a>

        <a
          className={styles.links}
          href="../../../develop/smart-contracts/tokenomics/xastro-token"
        >
        <Box
          title={boxProps.tokenomics.xastroToken.title}
          description={boxProps.tokenomics.xastroToken.description}
          image={boxProps.tokenomics.xastroToken.image}
          list={boxProps.tokenomics.xastroToken.list}
        />
        </a>

      </div>
    )
  }






}
