import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({ featured }) => (
    <span>
    {
        featured ? (
            <a className="ui right corner label">
                <i className="yellow star icon"></i>
            </a>
        ) : (
            <a className="ui right corner label">
                <i className="outline star icon"></i>
            </a>
        )
    }
    </span>
);

Featured.propTypes = {
    featured: PropTypes.bool.isRequired
}

export default Featured;