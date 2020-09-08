import React from 'react';
import Helmet from 'react-helmet';

import PropTypes from 'prop-types';

export const HelmetConfig = ({ title, description }) => (
    <Helmet>
        <title>Petgram 🐱{title && ` | ${title}`}</title>

        {description && <meta name="description" content={description} />}
    </Helmet>
);

HelmetConfig.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
