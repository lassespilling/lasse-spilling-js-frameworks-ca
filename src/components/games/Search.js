import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function Search({ handleSearch }) {
    return (
        <InputGroup className="search">
            <Form.Label>Search:</Form.Label>
            <FormControl
                className="w-100"
                type="search"
                placeholder="Search by name..."
                onChange={event => handleSearch(event)}
            />
        </InputGroup>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default Search;
