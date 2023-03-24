import { useQuery } from "@tanstack/react-query";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { WalletConnection } from "@delphi-labs/shuttle";

export default function useNFTInfo (wallet, nftId) {
  return useQuery(['nft-info', nftId], async () => {
    if (!wallet) {
      return null;
    }

    const client = await CosmWasmClient.connect(wallet?.network.rpc || "");

    const response = await client.queryContractSmart(
        "stars13unm9tgtwq683wplupjlgw39nghm7xva7tmu7m29tmpxxnkhpkcq4gf3p4",
      {
        badge: {
          id: nftId
        },
      }
    ); 
    console.log(response)
    return response
  }, {
    enabled: !!wallet && !!nftId,
  });
}