import React, { useState } from "react";

// Form
import { useForm } from "react-hook-form";
import * as yup from "yup";

// Layout
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "../layout/ErrorMessage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Emoji from "../layout/Emoji";
import FadeIn from "react-fade-in";
import "react-toggle/style.css";
import Toggle from "react-toggle";

const schema = yup.object().shape({
    firstn: yup // First name
        .string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters long")
        .matches(/^[a-zA-Z]+$/, "Firstname can only contain letters."),
    lastn: yup // Last name
        .string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters long")
        .matches(/^[a-zA-Z]+$/, "Last name can only contain letters."),
    em: yup // Email
        .string()
        .required("E-mail is required")
        .email(),
    message: yup // Message
        .string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters long")
});

const ContactForm = () => {
    const [autoComp, setAutoComp] = useState(false);
    const [success, setSucccess] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
        mode: "onChange"
    });
    const onSubmit = data => {
        setSucccess(true);
    };
    const toggle = () => {
        autoComp ? setAutoComp(false) : setAutoComp(true);
    };
    if (success) {
        return (
            <SuccessMessage
                show={true}
                symbol="🚛📦📨"
                symbolSize="300%"
                content="Your message was sent successfully"
            />
        );
    } else {
        return (
            <FadeIn>
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto mb-5 pb-5"
                    style={{ maxWidth: "400px" }}
                >
                    <span className="text-muted text-right ml-auto w-100 float-right">
                        <span
                            className="mr-3 position-relative"
                            style={{ top: "-0.4rem" }}
                        >
                            Autocomplete:{" "}
                        </span>
                        <Toggle
                            id="cheese-status"
                            defaultChecked={autoComp}
                            onClick={() => toggle()}
                            label="enabled"
                        />
                    </span>
                    <Form.Group>
                        <Form.Label>
                            <Emoji
                                symbol="🤝"
                                label="person"
                                top=".15em"
                                size="130%"
                            />
                            <span>Name</span>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            autoComplete={autoComp ? "given-name" : "no-fname"}
                            placeholder="First name"
                            name="firstn"
                            ref={register}
                            className="mb-2"
                        />
                        {errors.firstn && (
                            <ErrorMessage>{errors.firstn.message}</ErrorMessage>
                        )}
                        <Form.Control
                            type="text"
                            autoComplete={autoComp ? "family-name" : "no-lname"}
                            placeholder="Last name"
                            name="lastn"
                            ref={register}
                        />
                        {errors.lastn && (
                            <ErrorMessage>{errors.lastn.message}</ErrorMessage>
                        )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            <Emoji
                                symbol="📝"
                                label="paper"
                                top=".15em"
                                size="130%"
                            />
                            <span>Message</span>
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="5"
                            placeholder="Message"
                            name="message"
                            ref={register}
                            className="mb-2"
                        />
                        {errors.message && (
                            <ErrorMessage>
                                {errors.message.message}
                            </ErrorMessage>
                        )}
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>
                            <Emoji
                                symbol="✉️"
                                label="mail"
                                top=".15em"
                                size="130%"
                            />
                            <span>E-mail</span>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            autoComplete={autoComp ? "email" : "no-email"}
                            placeholder="E-ma&#8203;il" // autocomplete hack
                            name="em" // autocomplete hack
                            ref={register}
                            className="mb-2"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        {errors.email && (
                            <ErrorMessage>{errors.em.message}</ErrorMessage>
                        )}
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button
                            type="submit"
                            variant="outline-success"
                            className="btn-contact pb-2 pt-1"
                        >
                            <Emoji
                                symbol="📩"
                                label="send mail"
                                top="-0.1em"
                                size="130%"
                            />
                            <span>Send</span>
                        </Button>
                    </Form.Group>
                </Form>
            </FadeIn>
        );
    }
};

export default ContactForm;
