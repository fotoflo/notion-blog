import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const home = process.env.HOME_HOST
const twitter = process.env.TWITTER
const blogTitle = process.env.BLOG_TITLE
const ogImageUrl = process.env.OG_IMAGE_URL
const meta_desc = process.env.META_DESCRIPTION

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: home },
  { label: 'Blog', page: '/' },
  { label: 'Contact', page: '/contact' },
]

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>
          {titlePre ? `${titlePre} |` : ''} {blogTitle}
        </title>
        <meta name="description" content={meta_desc} />
        <meta name="og:title" content={blogTitle} />
        <meta name="og:description" content={meta_desc} />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content={twitter} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
