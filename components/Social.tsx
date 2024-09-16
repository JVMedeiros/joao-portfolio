
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'

const socials = [
  {icon: <FaGithub />, path: "https://github.com/JVMedeiros"},
  {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jvmedeiros/"},
  {icon: <FaInstagram />, path: "https://www.instagram.com/jvctrmd"},
  {icon: <FaYoutube />, path: ""},
  {icon: <FaTwitter />, path: ""},
]

export function Social({containerStyles, iconStyles}: any) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )

}