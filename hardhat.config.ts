import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import * as dotenv from "dotenv";
import "hardhat-gas-reporter";
import "hardhat-dependency-compiler";
import { HardhatUserConfig } from "hardhat/config";
// import { configuration } from "./src/utils/constants";
import "./tasks/deploy";
// import "./scripts/deploy";
// import "./test/zknews-test";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.7",
  // dependencyCompiler: {
  //   paths: ["@appliedzkp/semaphore-contracts/base/Verifier.sol"],
  // },
  networks: {
    localhost: {
      url: process.env.NEXT_PUBLIC_LOC_URL,
      accounts: [process.env.NEXT_PUBLIC_LOC_PRIVATE_KEY],
    },
    devnet: {
      url: process.env.NEXT_PUBLIC_LOC_URL,
      accounts: [process.env.NEXT_PUBLIC_LOC_PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.NEXT_PUBLIC_LOC_URL,
      accounts: [process.env.NEXT_PUBLIC_LOC_PRIVATE_KEY],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};

export default config;

export async function getServerSideProps() {
  const PTE_KEY = process.env.LOC_PRIVATE_KEY;
  // const URL = process.env.LOC_URL;
  // const contractAddress = process.env.localhost;
  // console.log(process.env.CONTRACT_ADDRESS);
  // const contractAddress = process.env.NEXT_PUBLIC_LOC_CONTRACT_ADDRESS;

  return {
    props: {
      hello: "world",
    },
  };
}
