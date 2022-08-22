import abiJSON from './Ev3nts.json'
import { ethers } from 'ethers'

function connectContract() {
  const contractAddress = '0xc2D518b0612D06f7FFB27A8Aa2e0358d0D990932'
  const contractABI = abiJSON.abi
  let ev3ntsContract
  try {
    const { ethereum } = window

    if (ethereum) {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      ev3ntsContract = new ethers.Contract(contractAddress, contractABI, signer) // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!")
    }
  } catch (error) {
    console.log('ERROR:', error)
  }
  return ev3ntsContract
}

export default connectContract
