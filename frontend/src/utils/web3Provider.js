import Web3 from "web3";

let web3;
let contract;
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // replace after deploy

export const loadWeb3 = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    alert("Please install MetaMask!");
  }
};

export const loadContract = async () => {
  if (!web3) await loadWeb3();
  // contract = new web3.eth.Contract(FishRegistryABI.abi, contractAddress);
  return contract;
};