import style from './friendItems.module.css';
import PropTypes from 'prop-types';

export const FriendsItem = ({ avatar, isOnline, name }) => {
    return <li className={style.item}>
        <span className={isOnline ? style.statusOnline: style.statusOffline}></span>
        <img className={style.avatar} src={ avatar } alt="User avatar" width="48" />
        <p className={style.name}>{ name }</p>
    </li>
}

FriendsItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
};