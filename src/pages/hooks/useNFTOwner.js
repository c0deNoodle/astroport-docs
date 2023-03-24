import { useQuery } from "@tanstack/react-query";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { WalletConnection } from "@delphi-labs/shuttle";

export default function useNFTOwner (wallet, nftId) {
  return useQuery(['nft-owner', nftId, wallet?.id], async () => {
    if (!wallet) {
      return null;
    }

    const client = await CosmWasmClient.connect(wallet?.network.rpc || "");

    const response = await client.queryContractSmart(
        "stars13unm9tgtwq683wplupjlgw39nghm7xva7tmu7m29tmpxxnkhpkcq4gf3p4",
      {
        owner: {
          id: nftId, 
          user: wallet.account.address
        },
      }
    ); 
    console.log(response)
    return response.claimed
  }, {
    enabled: !!wallet && !!nftId,
  });
}