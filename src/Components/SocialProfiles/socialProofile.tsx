import { SOCIAL_PROFILE__DETAILS } from "../../Constants/data";
import './socialProfile.css'
const SocialProfile = () => {
  return (
    <div className="conatiner">
      {
        SOCIAL_PROFILE__DETAILS.map(social_profile => {
          return (
            <a href={social_profile.link} target="blank" className="item" key={social_profile.id}>
              <img src={social_profile.image} className='icon' alt="profile-icon"/>
            </a>
          )
        })
      }
    </div>
  )
}

export default SocialProfile