import React, {Fragment} from 'react';
import TopBar from './topBar/index';
import NavBar from './navBar/index';

import banner1 from '../assets/images/banner-1.jpg';
import banner2 from '../assets/images/banner-2.jpg';
import banner3 from '../assets/images/banner-3.jpg';

let imageList = [
    banner1,
    banner2,
    banner3
];

function Header (){
    return (
        <Fragment>
            <TopBar name="11" imageList={imageList}></TopBar>
            <NavBar />
        </Fragment>
    )
}

export default Header;