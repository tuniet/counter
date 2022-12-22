import React from "react";
import { number } from "prop-types";

const CardCounter = props => {
    return (
        <div>
            <div>
                <p>{props.value}</p>
            </div>
        </div>
    );
};
CardCounter.prototype = {
    value: number
}
export default CardCounter;