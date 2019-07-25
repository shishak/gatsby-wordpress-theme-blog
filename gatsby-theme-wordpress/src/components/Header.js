import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Menu from './Menu'

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wpgraphql {
        generalSettings {
          description
          title
          url
        }
      }
    }
  `)

  const { title, description, url } = data.wpgraphql.generalSettings

  return (
    <header id="masthead" className="site-header">
      <p className="site-title">
        <Link to="/" rel="home">
          {title}
        </Link>
      </p>

      <p className="site-description">{description}</p>
      <Menu wordPressUrl={url} />
    </header>
  )
}

export default Header
