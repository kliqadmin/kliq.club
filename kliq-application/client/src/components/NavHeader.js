import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { LinkContainer } from "react-router-bootstrap";

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatorAddress: "",
      amountValue: 0,
    };
  }

  render() {
    let walletButton;
    let formattedAddress;
    if (!this.props.connectedWallet) {
      walletButton = (
        <Button variant="outline-dark" onClick={this.props.onWalletConnectClick}>
          Connect Wallet
        </Button>
      );
    } else {
      formattedAddress =
        this.props.connectedWallet.substring(0, 5) +
        "..." +
        this.props.connectedWallet.substring(39);
      walletButton = (
        <Dropdown as={ButtonGroup}>
          <Button variant="outline-dark">{formattedAddress}</Button>

          <Dropdown.Toggle split variant="outline-dark" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item onClick={this.props.onDisconnectWallet}>
              Disconnect
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            {/* <Navbar.Brand>Kliq</Navbar.Brand> */}
            <Image src={require('../kliq.png')}/>
          </LinkContainer>
          {/* <Nav className="mr-auto">
            <LinkContainer to="/fan">
              <Nav.Link>Fan</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/creator">
              <Nav.Link>Creator</Nav.Link>
            </LinkContainer>
          </Nav> */}
          <Nav className="ml-auto mr-2"></Nav>
          <Nav className="justify-content-end">{walletButton}</Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavHeader;
