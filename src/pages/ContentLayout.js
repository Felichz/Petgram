import React from 'react';
import PropTypes from 'prop-types';

import { Content } from './styles';
import { HelmetConfig } from './HelmetConfig';

export const ContentLayout = ({
    children,
    title,
    subtitle,
    showSubtitle = true,
    helmet = true,
}) => {
    return (
        <>
            {helmet && <HelmetConfig title={title} description={subtitle} />}

            <Content>
                <div>
                    <h1>{title}</h1>
                    {subtitle && showSubtitle && <h2>{subtitle}</h2>}
                    {children}
                </div>
            </Content>
        </>
    );
};

ContentLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    showSubtitle: PropTypes.bool,
    helmet: PropTypes.bool,
};
