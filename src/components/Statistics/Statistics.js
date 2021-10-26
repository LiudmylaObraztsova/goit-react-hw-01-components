import React from 'react'
import PropTypes from 'prop-types'
import styles from './Statistics.module.css'
import { randomColor } from '../../randomColor';


export default function Statistic({ title, stats }) {
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
            <span className={styles.Percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.defaultProps = {
  title: "",
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};



















// export default function Statistics({ title, stats }) {
//     <section className={statistics}>
//         {title&&<h2 className={title}>{ title}</h2>} 

//         <ul class="stat-list">
//             <li class="item">
//                 <span class="label">{label}</span>
//                 <span class="percentage">{ percentage}%</span>
//             </li>
//             {/* <li class="item">
//                 <span class="label">.mp3</span>
//                 <span class="percentage">14%</span>
//             </li>
//             <li class="item">
//                 <span class="label">.pdf</span>
//                 <span class="percentage">41%</span>
//             </li>
//             <li class="item">
//                 <span class="label">.mp4</span>
//                 <span class="percentage">12%</span>
//             </li> */}
//         </ul>
//     </section>
// }


// <Statistics title="Upload stats" stats={statisticalData} />;
// <Statistics stats={statisticalData} />;