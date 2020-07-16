import React from "react";
import { Button, Form } from "react-bootstrap";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    if (
      this.state.signInEmail === "admin" &&
      this.state.signInPassword === "admin"
    ) {
      this.props.onRouteChange("home");
    }
  };

  render() {
    return (
      <Form
        className="container"
        style={{
          width: "18rem",
          height: "250px",
          backgroundColor: "rgba(0,0,0,.4)",
          boxShadow: "0 15px 25px rgba(0,0,0,.5)",
          borderRadius: "10px",
          color: "white",
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email-address"
            id="email-address"
            placeholder="Enter email"
            onChange={this.onEmailChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={this.onPasswordChange}
          />
        </Form.Group>

        <Button
          type="submit"
          variant="outline-danger"
          size="lg"
          block
          className={{ paddingBottom: "20px" }}
          onClick={this.onSubmitSignIn}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default Signin;
