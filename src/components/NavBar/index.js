import React, { useContext } from 'react';

import swal from 'sweetalert';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { Context } from '../../Context';
import { Nav, Link } from './styles';

const ICON_SIZE = '32px';

export const NavBar = () => {
    const { isAuth } = useContext(Context);

    function authWarning() {
        swal('Oops!', 'You must be logged to access this section', 'warning');
    }

    return (
        <Nav>
            <Link to="/">
                <MdHome size={ICON_SIZE} />
            </Link>

            <Link
                to={isAuth ? '/favs' : '/login'}
                className={!isAuth && 'preventActive'}
                onClick={!isAuth && authWarning}
            >
                <MdFavoriteBorder size={ICON_SIZE} />
            </Link>

            <Link to={isAuth ? '/user' : '/login'}>
                <MdPersonOutline size={ICON_SIZE} />
            </Link>
        </Nav>
    );
};
