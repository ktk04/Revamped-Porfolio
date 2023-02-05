import React from 'react'
import {BsInstagram,BsDiscord} from 'react-icons/bs'
import {DiGithubBadge} from 'react-icons/di'
const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.instagram.com/ktk04.10/">
        <div>
            <BsInstagram/>
        </div>
      </a>
        <div>
            <BsDiscord/>
        </div>
        <a href="https://github.com/ktk04">
        <div>
            <DiGithubBadge/>
        </div>
        </a>
    </div>
  )
}

export default SocialMedia