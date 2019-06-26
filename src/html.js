import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from 'gatsby'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="assets/css/noscript.css'" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script src={withPrefix("jquery.min.js")}></script>
        <script src={withPrefix("jquery.scrolly.min.js")}></script>
        <script src={withPrefix("browser.min.js")}></script>
        <script src={withPrefix("breakpoints.min.js")}></script>
        <script src={withPrefix("util.js")}></script>
        <script src={withPrefix("main.js")}></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
