import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
export default class ModalComponent extends Component {
  render() {
    return (
      <div>
        <Modal
          size="lg"
          show={this.props.show}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              {`Edit ${this.props.name}`}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="name"
                  name="name"
                  value={this.props.name}
                  onChange={this.handleChange}
                />
                <Form.Control
                  type="email"
                  value={this.props.email}
                  name="name"
                />
                <Form.Control
                  type="phone"
                  value={this.props.phone}
                  name="name"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            <Button onClick={this.props.handleSubmit}>Done</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
