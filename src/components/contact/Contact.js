import React, { Component } from "react";
import Heading from "../layout/Heading";
import ContactForm from "./ContactForm";
import FadeIn from "react-fade-in";

class Contact extends Component {
    state = {};
    render() {
        return (
            <FadeIn>
                <Heading
                    content="Contact"
                    symbol="✉️"
                    symbolLabel="mail"
                    symbolSize="120%"
                ></Heading>
                <ContactForm></ContactForm>
            </FadeIn>
        );
    }
}

export default Contact;
