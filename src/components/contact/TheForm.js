import React from "react";
import ErrorMessage from "../layout/ErrorMessage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const TheForm = ({ register, onSubmit, handleSubmit, errors, success }) => {
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                {success}
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="First name"
                    name="firstname"
                    ref={register}
                    className="mb-2"
                />
                {errors.firstname && (
                    <ErrorMessage>{errors.firstname.message}</ErrorMessage>
                )}
                <Form.Control
                    type="text"
                    placeholder="Last name"
                    name="lastname"
                    ref={register}
                />
                {errors.lastname && (
                    <ErrorMessage>{errors.lastname.message}</ErrorMessage>
                )}
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    ref={register}
                    className="mb-2"
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="5"
                    placeholder="Message"
                    name="message"
                    ref={register}
                    className="mb-2"
                    // onChange={handleSubmit(data => data)}
                />
                {errors.message && (
                    <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
            </Form.Group>
            <Form.Group className="text-center">
                <Button type="submit" variant="outline-success">
                    <i className="i-contact"></i>
                    Login
                </Button>
            </Form.Group>
        </Form>
    );
};

export default TheForm;
