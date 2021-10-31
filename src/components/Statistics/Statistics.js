import React from 'react'
import PropTypes from 'prop-types'
import styles from './Statistics.module.css'
import { randomColor } from '../../randomColor';


export default function Statistics({ title, stats }) {
    return (
      <section className={styles.Statistics}>
      {title && <h2 className={styles.Title}>{title}</h2>}

      <ul className={styles.StatList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            className="item"
            key={id}
            className={styles.Item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.Label}>{label}</span>
            <span className={styles.Percentage}>{percentage}%</span>
          </li>
        ))} 
      </ul>
    </section>
  )
    
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
       label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
















