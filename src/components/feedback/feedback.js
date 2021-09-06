import PropTypes from 'prop-types';
import s from './feedback.module.css';
function Feedback({ options, onLeaveFeedback, ucFirst }) {
  const buttonsNames = Object.keys(options);
  return (
    <div>
      {buttonsNames.map(button => {
        return (
          <button
            key={button}
            className={s.button}
            type="button"
            onClick={() => onLeaveFeedback(button)}
          >
            {ucFirst(button)}
          </button>
        );
      })}
    </div>
  );
}
Feedback.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
  ucFirst: PropTypes.func,
};

export default Feedback;
