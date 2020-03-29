import React, { useState, useEffect } from "react"; // React

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Constants
import { BASE_URL } from "../../constants/api";

// Components
import Heading from "../layout/Heading";
import Search from "./Search";
import GameItem from "./GameItem";
import Favorites from "./Favorites";
import UseStickyState from "../UseStickyState";

// Layout
import Loading from "../layout/Loading";
import FadeIn from "react-fade-in";
import "./_games.scss";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function Games() {
    const [games, setGames] = useState([]);
    const [favorites, setFavorite] = UseStickyState([], "favorites");
    const [favDisabled, setFavDisabled] = useState([]);
    const [searchedGames, setsearchedGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setGames(json.results);
                setsearchedGames(json.results);
            })
            .catch(error => console.log(error))
            .finally(() =>
                setTimeout(() => {
                    setLoading(false);
                }, 0)
            );
    }, []);
    const setNewFavorite = (newfav, id) => {
        if (favorites.includes(newfav)) {
            // Remove existing fav from array
            setFavorite(favorites.filter(e => e !== newfav));

            // Disable fav btn
            setFavDisabled(favDisabled.filter(e => e !== id));
        } else if (!favorites.includes(newfav)) {
            setFavorite(favorites => [...favorites, newfav]);
            setFavDisabled(favDisabled => [...favDisabled, id]);
        }
    };
    const resetFavorites = () => {
        setFavorite([], "favorites");
        setFavDisabled(favDisabled => []);
    };

    const searchCards = function(e) {
        // Let's get the value the user typed in and make it lower case:
        const searchValue = e.target.value.toLowerCase();

        // create a new array from the games array
        const searchedArray = games.filter(function(char) {
            // make each name lowercase so we can check it properly with the search value
            const lowerCaseName = char.name.toLowerCase();

            // check if the game name begins with the search value using the startsWith method
            if (lowerCaseName.includes(searchValue)) {
                // if it does, return true
                // this will add it to the new searched array
                return true;
            }
            return false;
        });

        // set searched games to the new array
        setsearchedGames(searchedArray);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <FadeIn>
                <Heading
                    content="Games"
                    symbol="🎮"
                    symbolLabel="video game controller"
                    symbolSize="120%"
                ></Heading>
            </FadeIn>
            <Favorites
                favorites={favorites}
                resetFunction={() => resetFavorites()}
            />

            <FadeIn>
                <Search handleSearch={searchCards} />
                <Row className="mb-5 pb-5">
                    {searchedGames.map(game => {
                        const {
                            id,
                            name,
                            background_image,
                            metacritic,
                            released
                        } = game;
                        return (
                            <Col
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={6}
                                key={id}
                            >
                                <GameItem
                                    id={id}
                                    rating={metacritic}
                                    name={name}
                                    favDisabled={favDisabled}
                                    key={id + 1}
                                    favorite={() => setNewFavorite(name, id)}
                                    image={background_image}
                                    released={released}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </FadeIn>
        </>
    );
}
export default Games;
