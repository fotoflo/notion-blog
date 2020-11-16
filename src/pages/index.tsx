import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/vercel-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>Alex's Notion Blog</h1>
      <h2>
        AIMHuge
      </h2>

      <Features />

      <div className="explanation">
        <p>
         This is a stub for the AimHuge Blog, created with Notion and forlking
          <ExtLink href="https://github.com/ijjk/notion-blog">
            ijjk's notion-blog
          </ExtLink>{' '}
        </p>
      </div>
    </div>
  </>
)
