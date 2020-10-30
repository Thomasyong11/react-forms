import React, { Component } from "react";
import FormFields from "../widgets/forms/formfields";
import { firebaseDb } from "../firebase";
class User extends Component {
  state = {
    formData: {
      name: {
        element: "input",
        value: "",
        label: true,
        labelText: "Name",
        config: {
          name: "name_input",
          text: "text",
          placeholder: "Enter your name",
        },
        validation: {
          required: true,
          minLen: 3,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      Lastname: {
        element: "input",
        value: "",
        label: true,
        labelText: "Last Name",
        config: {
          name: "lastname_input",
          text: "text",
          placeholder: "Enter your last name",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      message: {
        element: "textarea",
        value: "",
        label: true,
        labelText: "Message",
        config: {
          name: "message_input",
          rows: 4,
          cols: 36,
        },
        validation: {
          required: false,
        },
        valid: true,
      },
      age: {
        element: "select",
        value: "",
        label: true,
        labelText: "Age",
        config: {
          name: "age_input",
          options: [
            { val: "1", text: "10-20" },
            { val: "1", text: "20-30" },
            { val: "1", text: "30 +" },
          ],
        },
        validation: {
          required: false,
        },
        valid: true,
      },
    },
  };

  updateForm = (newState) => {
    this.setState({
      formData: newState,
    });
  };
  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {};
    let formISValid = true;
    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
    }
    for (let key in this.state.formData) {
      formISValid = this.state.formData[key].valid && formISValid;
    }
    if (formISValid) {
      firebaseDb
        .ref("users")
        .push(dataToSubmit)
        .then(() => {
          console.log("new user added");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <FormFields
            formData={this.state.formData}
            onblur={(newState) => this.updateForm(newState)}
            change={(newState) => this.updateForm(newState)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default User;
