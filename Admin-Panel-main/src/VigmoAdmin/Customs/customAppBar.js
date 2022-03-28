import * as React from 'react';
import { AppBar } from 'react-admin';
import CustomUserMenu from './customUserMenu';

const customAppBar = props => (
    <AppBar {...props} userMenu={<CustomUserMenu />} />
);

export default customAppBar;
