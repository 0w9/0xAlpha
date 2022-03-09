import React from 'react'
import { Navbar } from 'reactstrap'
import { useState } from 'react'
import './Header.css'

function Header() {
  const [account, setAccount] = useState('')
  const [buttonText, setButtonText] = useState('Connect Wallet')

  const connectWallet = async () => {
    if (window.ethereum) {
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      await setAccount(accounts[0])
      await setButtonText(accounts[0])
    } else {
      alert('Please get a wallet!')
    }
  }

  return (
    <Navbar className="navbar">
      <button className="btn" onClick={connectWallet}> {buttonText} </button>
    </Navbar>
  )
}

export default Header
