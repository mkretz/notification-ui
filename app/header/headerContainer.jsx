import { connect } from 'react-redux';
import Header from './header.jsx';

const getVisibleNotifications = (notifications) => (notifications ? notifications.filter((n) => n.visible) : undefined);

const mapStateToProps = (state) => {
    return {
        notifications: getVisibleNotifications(state.notifications.notifications)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
