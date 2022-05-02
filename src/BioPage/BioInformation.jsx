import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { setFormValue } from "../redux/bioSlice";
import { connect } from "react-redux";

class BioInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        name: "",
        email: "",
        age: "",
        gender: "",
      },
      validated: false,
      submit: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
    event.stopPropagation();
    console.log(event);
    const formValue = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      gender: this.state.gender,
    };
    this.props.setFormValue(formValue);
    this.setState({ submit: true });
  };
  render() {
    return (
      <Card style={{ width: "30rem", height: "100%", margin: "60px" }}>
        <Card.Title style={{ marginTop: "20px" }}>
          Enter Your Bio Information
        </Card.Title>
        <Card.Body>
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => this.setState({ name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Age"
                onChange={(e) => this.setState({ age: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="Gender"
                onChange={(e) => this.setState({ gender: e.target.value })}
              >
                <option>Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="T">Transgender</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>

        {this.state.submit ? (
          <Card.Footer style={{ color: "green" }}>Submitted!!!</Card.Footer>
        ) : null}
      </Card>
    );
  }
}

export default connect(null, { setFormValue })(BioInformation);
