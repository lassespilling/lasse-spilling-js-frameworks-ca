import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Emoji from "../layout/Emoji";
import RandomLoader from "../layout/RandomLoad";
import FadeIn from "react-fade-in";

const Loading = () => {
    return (
        <FadeIn>
            <Spinner animation="border" className="spinner mx-auto d-block">
                <span className="sr-only">Loading...</span>
                <Emoji symbol="🎮" label="gamer controller" size="200%" />
            </Spinner>
            <RandomLoader className="text-center h4 mt-4" />
        </FadeIn>
    );
};
export default Loading;
