import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import * as dotenv from "dotenv";
import "hardhat-gas-reporter";
import "hardhat-dependency-compiler";
import { HardhatUserConfig } from "hardhat/config";
import { configuration } from "./src/utils/constants";
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
      url: configuration.LOC_URL,
      accounts: [configuration.LOC_PRIVATE_KEY!],
    },
    devnet: {
      url: configuration.DEV_URL,
      accounts: [configuration.DEV_PRIVATE_KEY!],
    },
    mainnet: {
      url: configuration.MAIN_URL,
      accounts: [configuration.MAIN_PRIVATE_KEY!],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};

export default config;
