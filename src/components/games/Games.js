import React, { useState, useEffect } from "react"; // React

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

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
    const [paginationSize, setPaginationSize] = useState("lg");
    const [paginationTotal, setPaginationTotal] = useState(8);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = UseStickyState(1, "page");
    const [pageSize, setPageSize] = UseStickyState(1, "pageSize");

    if (page < 1) {
        setPage(1);
    }

    useEffect(() => {
        fetch(BASE_URL + "?page=" + page + "&page_size=" + pageSize)
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
        if (window.innerWidth <= 750) {
            setPaginationTotal(5);
        } else if (window.innerWidth > 750 && window.innerWidth < 1000) {
            setPaginationTotal(10);
        } else if (window.innerWidth > 1000) {
            setPaginationTotal(15);
        }
    }, [page, pageSize, paginationTotal]);
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

    let activePage = page;
    let pageNumbers = [];
    for (let number = 1; number <= paginationTotal; number++) {
        pageNumbers.push(
            <Pagination.Item
                key={number}
                active={number === activePage}
                onClick={() => setPage(number)}
            >
                {number}
            </Pagination.Item>
        );
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
                <Form>
                    <Row className="my-3 mb-1">
                        <Col md={8}>
                            <Form.Group>
                                <Search handleSearch={searchCards} />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formBasicRangeCustom">
                                <Form.Label>Show: {pageSize}</Form.Label>
                                <Form.Control
                                    className="mt-1"
                                    type="range"
                                    min="10"
                                    max="50"
                                    step="10"
                                    placeholder="1"
                                    value={pageSize}
                                    custom
                                    onChange={e => setPageSize(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Row className="mb-5 pb-5">
                    {searchedGames.map(game => {
                        const {
                            id,
                            name,
                            background_image,
                            metacritic,
                            released,
                            next
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
                <div className="d-flex w-100 justify-content-center align-center">
                    <div className="mx-5">
                        <Badge variant="dark" className="p-2 mt-1">
                            Current page: {page}
                        </Badge>
                    </div>
                    <div className="mx-5">
                        <Form.Group controlId="formBasicRangeCustom">
                            <Form.Label>Go to page: </Form.Label>
                            <Form.Control
                                className="mt-1 rounded dark mx-2"
                                type="number"
                                min="1"
                                max="50"
                                step="1"
                                placeholder="1"
                                value={page}
                                custom
                                onChange={e => setPage(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                </div>
                <Pagination
                    size={paginationSize}
                    className="mx-auto d-flex justify-content-center mb-5 pb-5"
                >
                    <Pagination.Prev onClick={() => setPage(page - 1)} />
                    {pageNumbers}
                    <Pagination.Next onClick={() => setPage(page + 1)} />
                </Pagination>
            </FadeIn>
        </>
    );
}
export default Games;
