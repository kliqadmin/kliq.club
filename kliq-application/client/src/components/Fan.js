import React, { Component } from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import Web3 from 'web3'
import FanProxyContract from '../contracts/FanProxy.json'
import TransactionModal, { TransactionModalState } from './TransactionModal'
import { addresses } from '../addresses'
import './Fan.css'

class Fan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      creatorAddress: '0x6C6548106f70F38cc94581d78298BD4F61B3b32d',
      amountValue: 0,
      sentTransactionHash: '',
      transactionModalState: TransactionModalState.HIDDEN,
    }

    this.getEthAmount = this.getEthAmount.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.resetTransactionModal = this.resetTransactionModal.bind(this)
    this.sendDonation = this.sendDonation.bind(this)
  }

  componentDidMount = async () => {
    const creatorAddressFromUrl = this.props.match.params.creatorAddress
    if (creatorAddressFromUrl) {
      this.setState({ creatorAddress: creatorAddressFromUrl })
    }
    await this.initContract()
  }

  componentDidUpdate = async (prevProps) => {
    if (this.props.provider !== prevProps.provider) {
      await this.initContract()
    }
  }

  async initContract() {
    const { provider } = this.props
    if (!provider || this.state.contract) {
      return
    }

    try {
      const web3 = new Web3(provider)
      const networkId = await web3.eth.net.getId()
      const fanProxyAddress = addresses[networkId]
        ? addresses[networkId].fanProxy
        : FanProxyContract.networks[networkId].address
      const instance = new web3.eth.Contract(
        FanProxyContract.abi,
        fanProxyAddress
      )

      this.setState({ contract: instance })
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error)
    }
  }

  handleInputChange(event) {
    const target = event.target
    switch (target.name) {
      case 'creatorAddress':
        this.setState({ creatorAddress: target.value })
        break
      case 'amountValue':
        this.setState({ amountValue: Number.parseFloat(target.value) })
        break
      default:
    }
  }

  resetTransactionModal() {
    this.setState({
      sentTransactionHash: '',
      transactionModalState: TransactionModalState.HIDDEN,
    })
  }

  getEthAmount() {
    return Web3.utils.toWei(this.state.amountValue.toString(), 'ether')
  }

  sendDonation(event) {
    event.preventDefault()

    try {
      this.state.contract.methods
        .swapAndDonateETH(this.state.creatorAddress)
        .send({ from: this.props.connectedWallet, value: this.getEthAmount() })
        .once('transactionHash', (hash) => {
          this.setState({
            sentTransactionHash: hash,
            transactionModalState: TransactionModalState.AWAITING_CONFIRMATION,
          })
        })
        .once('receipt', () => {
          this.setState({
            transactionModalState: TransactionModalState.CONFIRMED,
          })
        })
        .on('error', () => {
          this.setState({
            transactionModalState: TransactionModalState.ERROR,
          })
        })
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  isValidAddress(address) {
    // TODO: Support ENS addresses.
    return Web3.utils.isAddress(address)
  }

  isValidAmount(amount) {
    return Number.isFinite(amount) && amount > 0.0
  }

  render() {
    let button

    if (!this.props.connectedWallet) {
      button = (
        <Button
          variant="primary"
          size="lg"
          block
          type="button"
          onClick={this.props.onWalletConnectClick}
          data-testid="connect-wallet-button"
        >
          Connect wallet
        </Button>
      )
    } else {
      const disabled =
        !this.isValidAddress(this.state.creatorAddress) ||
        !this.isValidAmount(this.state.amountValue)
      button = (
        <Button
          variant="success"
          size="lg"
          block
          type="submit"
          disabled={disabled}
          data-testid="send-button"
        >
          Send
        </Button>
      )
    }

    return (
      <div className="fan-container">
        <Card className="support-card">
          <Card.Body>
            <Card.Title>Support</Card.Title>
            <Card.Subtitle>Send crypto to your favorite creator.</Card.Subtitle>
            <Form className="support-form" onSubmit={this.sendDonation}>
              <Form.Group controlId="creatorAddress">
                <Form.Label srOnly>Creator's ETH wallet address</Form.Label>
                <Form.Control
                  name="creatorAddress"
                  placeholder="Creator's ETH address"
                  type="text"
                  size="lg"
                  defaultValue={this.state.creatorAddress}
                  onChange={this.handleInputChange}
                  data-testid="creatorAddress"
                />
              </Form.Group>
              <Form.Group controlId="amountValue">
                <Form.Label srOnly>Amount in ETH</Form.Label>
                <InputGroup>
                  <Form.Control
                    name="amountValue"
                    size="lg"
                    type="text"
                    placeholder="0.0"
                    onChange={this.handleInputChange}
                    data-testid="amountValue"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>ETH</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
              {button}
            </Form>
          </Card.Body>
        </Card>
        <TransactionModal
          confirmedText="Thank you for supporting the creators you love!"
          modalState={this.state.transactionModalState}
          transactionHash={this.state.sentTransactionHash}
          onHide={this.resetTransactionModal}
        />
      </div>
    )
  }
}

export default Fan
