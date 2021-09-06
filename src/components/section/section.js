import PropTypes from 'prop-types';
import s from './section.module.css';
export default function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h2 className={s.head}>{title}</h2>
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
