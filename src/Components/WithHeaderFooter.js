import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux'; //redux

export default function WithHeaderFooter(Component) {
    return function WrappedComponent(props) {
        const user = useSelector((state) => state.user);
        return (
            <div>
                {/* key is used to re-render header when user state changes*/}
                <Header key= {user ? user.id : "empty"} />
                <Component {...props} />
                <Footer />
            </div>
        )
    };
}
