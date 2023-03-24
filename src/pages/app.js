import { useShuttle } from "@delphi-labs/shuttle";
import useNFTInfo from "./hooks/useNFTInfo";
import useNFTOwner from "./hooks/useNFTOwner";

function App() {
  const { connect, disconnect, recentWallet } = useShuttle();
  const nftInfo = useNFTInfo(recentWallet, 3); 
  const nftOwner = useNFTOwner(recentWallet, 3);

  return (
    <div>
      {!recentWallet && <button onClick={() => connect("keplr", "stargaze-1")}>
        Connect Keplr 
      </button>}

      {recentWallet && (
        <>
          <h2>Recent Wallet</h2>
          <p>ID: {recentWallet.id}</p>
          <p>Provider ID: {recentWallet.providerId}</p>
          <p>Chain ID: {recentWallet.network.chainId}</p>
          <p>Address: {recentWallet.account.address}</p>
          <button onClick={() => disconnect()} >Disconnect</button>
        </>
      )}

      {nftInfo.data && <>
        <h3>{nftInfo.data.metadata.name}</h3>
        <p>{nftInfo.data.metadata.description}</p>
        <p>Owned: {nftOwner.data ? "yes" : "no"}</p>
        <img src={nftInfo.data.metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")} /> 
      </>}

    </div>
  )
}

export default App

