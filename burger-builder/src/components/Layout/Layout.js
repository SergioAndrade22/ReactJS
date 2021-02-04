import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <Auxiliar>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <main className={classes.Content}>
                {children}
            </main>
        </Auxiliar>
    );
};

export default Layout;