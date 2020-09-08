import React from 'react';
import { Content } from './styles';
import { Helmet } from 'react-helmet';

export const ContentLayout = ({ children, title, subtitle, helmet = true }) => {
    return (
        <>
            {helmet && (
                <Helmet>
                    {title ? (
                        <title>Petgram 🐱| {title}</title>
                    ) : (
                        <title>Petgram 🐱</title>
                    )}

                    {subtitle && <meta name="description" content={subtitle} />}
                </Helmet>
            )}

            <Content>
                <div>
                    {title && <h1>{title}</h1>}
                    {subtitle && <h2>{subtitle}</h2>}
                    {children}
                </div>
            </Content>
        </>
    );
};
