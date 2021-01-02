import React from "react"
import { Link } from "react-router-dom"

import SocialNetwork from "app/components/social-network/SocialNetwork"

const ProfileImage = () => (
  <div className="home__img">
    <img
      src="https://images.unsplash.com/photo-1609172772815-fd717cd9761f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
  </div>
)

const ProfileDescription = () => (
  <>
    <h1 className="home__name">Dejan Bratić</h1>
    <span className="home__profession">
      Software Engineer | .NET | C# | SQL | JavaScript | React
    </span>
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
