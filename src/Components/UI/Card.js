import React, { Component } from "react";
import PropTypes from "prop-types";
import "./card.css";

class Card extends Component {
    render(){
        const classes =  `card ${this.props.className}`
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}


export default Card;