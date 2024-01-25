import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function WithHeaderFooter(Component) {
    return function WrappedComponent(props) {
        return (
            <div>
                <Header />
                <Component {...props} />
                <Footer />
            </div>
        )
    };
}
