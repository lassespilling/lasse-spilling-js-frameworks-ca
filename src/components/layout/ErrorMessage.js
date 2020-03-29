import React from "react";
import FadeIn from "react-fade-in";

const ErrorMessage = ({ children }) => {
    return (
        <FadeIn>
            <div class="error">{children}</div>
        </FadeIn>
    );
};

export default ErrorMessage;
