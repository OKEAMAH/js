import type { Chain } from "../src/types";
export default {
  "chain": "ZIL",
  "chainId": 32990,
  "explorers": [
    {
      "name": "Zilliqa EVM Isolated Server Explorer",
      "url": "https://devex.zilliqa.com/?network=https://zilliqa-isolated-server.zilliqa.com",
      "standard": "none"
    }
  ],
  "faucets": [
    "https://dev-wallet.zilliqa.com/faucet?network=isolated_server"
  ],
  "infoURL": "https://www.zilliqa.com/",
  "name": "Zilliqa EVM Isolated Server",
  "nativeCurrency": {
    "name": "Zilliqa",
    "symbol": "ZIL",
    "decimals": 18
  },
  "networkId": 32990,
  "rpc": [
    "https://32990.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://zilliqa-isolated-server.zilliqa.com/"
  ],
  "shortName": "zil-isolated-server",
  "slug": "zilliqa-evm-isolated-server",
  "testnet": false
} as const satisfies Chain;