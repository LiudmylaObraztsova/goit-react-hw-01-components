import PropTypes from 'prop-types'
import defaultImage from './nophoto.jpg'
import styles from './Profile.module.css'

export default function Profile({ src=defaultImage, alt, name, tag, location, stats }) {

  return <div className={styles.Profile}>
  <div className={styles.Description}>
    <img
      src={src}
      alt={alt}
      className={styles.Avatar}
    />
      <p className={styles.Name}>{name }</p>
      <p className={styles.Tag}>@{tag}</p>
      <p className={styles.Location}>{ location}</p>
  </div>

  <ul className={styles.Stats}>
    <li>
      <span className={styles.Label}>Followers: </span>
        <span className={styles.Quantity}>{ stats.followers}</span>
    </li>
    <li>
      <span className={styles.Label}>Views: </span>
      <span className={styles.Quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.Label}>Likes: </span>
      <span className={styles.Quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,

    stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
 
    


