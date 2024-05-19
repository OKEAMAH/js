import type { Chain } from "../src/types";
export default {
  "chain": "OLT",
  "chainId": 4216137055,
  "explorers": [
    {
      "name": "OneLedger Block Explorer",
      "url": "https://frankenstein-explorer.oneledger.network",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://frankenstein-faucet.oneledger.network"
  ],
  "infoURL": "https://oneledger.io",
  "name": "OneLedger Testnet Frankenstein",
  "nativeCurrency": {
    "name": "OLT",
    "symbol": "OLT",
    "decimals": 18
  },
  "networkId": 4216137055,
  "rpc": [
    "https://4216137055.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://frankenstein-rpc.oneledger.network"
  ],
  "shortName": "frankenstein",
  "slip44": 1,
  "slug": "oneledger-testnet-frankenstein",
  "testnet": true
} as const satisfies Chain;