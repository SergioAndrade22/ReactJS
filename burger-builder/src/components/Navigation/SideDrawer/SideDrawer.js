import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';

const SideDrawer = ({hide, open}) => {
    return (
        <Auxiliar>
            <Backdrop show={open} exit={hide}/>
            <div className={[classes.SideDrawer, open ? classes.Open : classes.Close].join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliar>
    );
};

export default SideDrawer;