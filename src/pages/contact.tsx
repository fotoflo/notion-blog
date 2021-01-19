import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const home = process.env.HOME
const mailto = process.env.MAILTO
const myTwitter = process.env.TWITTER
const myTwitterLink = `https://twitter.com/${myTwitter.substring(1)}`
const myGithub = process.env.GITHUB
const myLinkedin = process.env.LINKEDIN
const blogName = process.env.BLOG_NAME
const contactName = process.env.CONTACT_NAME
const avatarUrl = process.env.AVATAR_URL

const contacts = [
  {
    Comp: Twitter,
    alt: myTwitter,
    link: myTwitterLink,
  },
  {
    Comp: GitHub,
    alt: myGithub,
    link: `https://github.com/${myGithub}`,
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: myLinkedin,
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: mailto,
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src={avatarUrl} alt="avatar" height={45} />
      </div>

      <h1 style={{ marginTop: 0 }}>Contact</h1>

      <div className={contactStyles.name}>
        {contactName} @ <ExtLink href={home}>{blogName}</ExtLink>
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
