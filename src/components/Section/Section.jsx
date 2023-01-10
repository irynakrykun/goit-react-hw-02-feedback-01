import PropTypes from 'prop-types';
// import { Children } from 'react';
import css from '../Section/Section.module.css';

 const Section = ({ title }) => {
    return (
        <h2 className={css.title}>{title}</h2>
        // && { Children }
    )
};


Section.propTypes = {
    title: PropTypes.string.isRequired
};
export default Section;