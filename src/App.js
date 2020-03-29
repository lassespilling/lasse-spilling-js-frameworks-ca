import React, { useContext } from "react";
import "./sass/style.scss";

import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";

// Bootstrap
import Container from "react-bootstrap/Container";

// Layout
import Navigation from "./components/layout/Navigation";
import AbsoluteWrapper from "./components/layout/AbsoluteWrapper";

// Pages
import Games from "./components/games/Games";
import Contact from "./components/contact/Contact";
import Favorites from "./components/games/Favorites";
import GameDetail from "./components/games/GameDetail";

const App = () => {
    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        from: { transform: "translateY(0vh)" },
        enter: { otransform: "translateY(0vh)" },
        leave: { transform: "translateY(0vh)" }
    });

    return (
        <>
            <div id="bg"></div>
            <div id="darken"></div>
            <Navigation />
            <Container className="container-content">
                {transitions.map(({ item, props, key }) => (
                    <animated.div key={key} style={props} className="animated">
                        <Switch location={item}>
                            <AbsoluteWrapper>
                                <Route path="/" exact component={Games} />
                                <Route path="/Contact" component={Contact} />
                                <Route
                                    path="/games/:id"
                                    component={GameDetail}
                                />
                            </AbsoluteWrapper>
                        </Switch>
                    </animated.div>
                ))}
            </Container>
        </>
    );
};

export default App;
