import React from "react"
import { Link } from "react-router-dom"

import SocialNetwork from "app/home/SocialNetwork"

const ProfileImage = () => (
  <div className="home__img">
    <img src="" alt="" />
  </div>
)

const ProfileDescription = () => (
  <>
    <h1 className="home__name">Dejan Bratić</h1>
    <span className="home__profession">Software Engineer</span>
  </>
)

const ResumeDownloadButton = () => (
  <Link to="/" download="" className="button home__button">
    Download Resume
  </Link>
)

const Profile = () => {
  return (
    <div className="home__profile">
      <ProfileImage />

      <ProfileDescription />

      <SocialNetwork />

      <ResumeDownloadButton />
    </div>
  )
}

export default Profile
