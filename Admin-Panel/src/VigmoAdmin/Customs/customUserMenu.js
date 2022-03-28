import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { crudGetOne, UserMenu, MenuItemLink } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';

class customUserMenuView extends Component {
    // componentDidMount() {
    //     this.fetchProfile();
    // }

    // fetchProfile = () => {
    //     this.props.crudGetOne(
    //         // The resource
    //         'users',
    //         // The id of the resource item to fetch
    //         '1',
    //         // The base path. Mainly used on failure to fetch the data
    //         '/profile',
    //         // Wether to refresh the current view. I don't need it here
    //         false
    //     );
    // };

    render() {
        const { crudGetOne, profile, ...props } = this.props;
        return (
            <UserMenu label={profile ? profile.nickname : ''} {...props}>
                <MenuItemLink
                    to="/profile"
                    primaryText="My profile"
                    leftIcon={<SettingsIcon />}
                />
            </UserMenu>
        );
    }
}

// const mapStateToProps = state => {
//     const resource = 'users';
//     const id = 'profile';

//     return {
//         profile: state.admin.resources[resource]
//             ? state.admin.resources[resource].data[id]
//             : null
//     };
// };

const mapStateToProps = state => {};

const CustomUserMenu = connect(
    mapStateToProps,
    { crudGetOne }
)(customUserMenuView);
export default CustomUserMenu;
