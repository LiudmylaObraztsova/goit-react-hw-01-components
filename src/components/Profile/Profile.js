import PropTypes from 'prop-types'
import defaultImage from '../nophoto.jpg'

export default function Profile({ src=defaultImage, alt, name, tag, location, followers, views, likes }) {

  return <div class="profile">
  <div class="description">
    <img
      src={src}
      alt={alt}
      class="avatar"
    />
      <p class="name">{name }</p>
      <p class="tag">{ tag}</p>
      <p class="location">{ location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers: </span>
        <span class="quantity">{ followers}</span>
    </li>
    <li>
      <span class="label">Views: </span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes: </span>
      <span class="quantity">{likes}</span>
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
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
    
}

// ReactDOM.render(<Profile
//   src={user.avatar}
//   alt={user.name}
//   name={user.name}
//   tag={user.tag}
//   location={user.location}
//   followers={user.stats.followers}
//   views={user.stats.views}
//   likes={user.stats.likes} />, document.querySelector('#root'))
