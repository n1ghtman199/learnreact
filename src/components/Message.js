import React from 'react';
import PropTypes from 'prop-types';

const classes = {
  info: 'info',
  error: 'exclamation triangle',
  success: 'thumbs up'
};

const Message = ({ header, content, type }) => (
    <div className={`ui icon message ${type}`}><i className={'icon ' + classes[type]}></i>
        <div className="content">
            <div className="header">{header}</div>
            <p>{content}</p>
        </div>
    </div>
);

Message.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

Message.defaultProps = {
    type: "info"
};

export default Message;