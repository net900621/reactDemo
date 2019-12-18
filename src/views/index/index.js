import React from 'react';
import Box from '@material-ui/core/Box';
import TopBar from '../../component/topBar/index';
import NavBar from '../../component/navBar/index';
import Recommend from '../../component/recommend/index';
import './index.css';

import banner1 from '../../assets/images/banner-1.jpg';
import banner2 from '../../assets/images/banner-2.jpg';
import banner3 from '../../assets/images/banner-3.jpg';

let imageList = [
  banner1,
  banner2,
  banner3
]

function Index() {
  return (
    <Box className="Index">
      <TopBar name="11" imageList={imageList}></TopBar>
      <NavBar />
      <Recommend />
    </Box>
  );
}

export default Index;
