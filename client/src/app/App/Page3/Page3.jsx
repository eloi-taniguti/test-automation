import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import classes from './Page3.module.scss';
import backgroundImg from '../../../assets/img/home.svg';


function Page3() {

 
  return (
    <div>
      <div className={classes.BackgroundImg} aria-hidden='true'>
        <img src={backgroundImg} alt=''></img>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to='/'>HOME</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/page1'>Page 1</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/page'>Page 2</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Page 3</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
} 
export default Page3;