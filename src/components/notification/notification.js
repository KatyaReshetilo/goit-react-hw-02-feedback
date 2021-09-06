import PropTypes from 'prop-types';
import s from './notification.module.css';
export default function Notification({ message }) {
  return <p className={s.message}>{message}</p>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
