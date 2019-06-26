/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      noscript={[
        {
          link: [
            {
              rel: 'stylesheet',
              href: './assets/css/noscript.css'
            }
          ]
        }
      ]}
      script={[
        {
          src: withPrefix('jquery.min.js'),
          type: 'text/javascript'
        },
        {
          src: withPrefix('breakpoints.min.js'),
          type: 'text/javascript'
        },
        {
          src: withPrefix('browser.min.js'),
          type: 'text/javascript'
        },
        {
          src: withPrefix('jquery.min.js'),
          type: 'text/javascript'
        },
        {
          src: withPrefix('util.js'),
          type: 'text/javascript'
        },
        {
          src: withPrefix('jquery.scrolly.min.js'),
          type: 'text/javascript'
        },
        {
          src: withPrefix('main.js'),
          type: 'text/javascript'
        },
      ]}
      meta={[
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=no',
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
