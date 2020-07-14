import React from "react";
import "./card.style.css";
import Modal from "../modal/modal.component";

export class Card extends React.Component {
  state = {
    isEdit: false,
  };

  handleModalForm = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  };

  render() {
    const { monster, remove, ...rest } = this.props;
    const { name, email, phone, id } = monster;
    return (
      <div className="card-container" onClick={this.handleModalForm}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <button
          className="rm"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            remove(id);
          }}
        >
          &times;
        </button>
        {this.state.isEdit && (
          <Modal
            show={this.state.isEdit}
            onHide={this.handleModalForm}
            name={name}
            email={email}
            phone={phone}
          />
        )}
      </div>
    );
  }
}
