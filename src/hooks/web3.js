import { useEffect, useState } from "react";
import Web3 from "web3";

function useWeb3() {
  const [account, setAccount] = useState("");
  const [web3, setweb3] = useState(null);

  async function _init() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    setAccount((await web3.eth.getAccounts())[0]);
    setweb3(web3);
  }

  useEffect(() => {
    _init();
  }, []);

  return { account, web3 };
}

export default useWeb3;
