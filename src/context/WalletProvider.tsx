import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { type ReactNode } from "react";
import { NETWORK } from "../lib/contractUtils";

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AptosWalletAdapterProvider
      autoConnect={true}
      dappConfig={{
        network: NETWORK,
      }}
      optInWallets={["Continue with Google", "Petra", "Nightly", "Pontem Wallet"]}
      onError={(error) => {
        console.log("error", error);
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
};
