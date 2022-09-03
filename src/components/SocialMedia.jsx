import React from 'react'
import {BsInstagram,BsDiscord} from 'react-icons/bs'
import {DiGithubBadge} from 'react-icons/di'
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsInstagram/>
        </div>
        <div>
            <BsDiscord/>
        </div>
        <div>
            <DiGithubBadge/>
        </div>
    </div>
  )
}

export default SocialMedia