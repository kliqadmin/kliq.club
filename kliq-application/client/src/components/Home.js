import React, { Component } from "react";
import { Button, Card, CardDeck, Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="text-center">
          <h1 className="display-4">Welcome to Kliq!</h1>
          <p className="lead">Sponsor your creator and support them</p>
          <div className="mt-4 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center mr-4">
              <h2 className="h5">Fans</h2>
              <Link to="/fan">
                <Button variant="info" size="lg">
                  Support creators
                </Button>
              </Link>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h2 className="h5">Creators</h2>
              <Link to="/creator">
                <Button variant="success" size="lg">
                  Open dashboard
                </Button>
              </Link>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
