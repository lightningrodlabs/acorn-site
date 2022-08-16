/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../hooks/use-site-metadata"

function SEO({ title, description, pathname, children, lang }) {
  //  const { site, ogImageDefault } = useStaticQuery(
  //    graphql`
  //      query {
  //        site {
  //          siteMetadata {
  //            title
  //            description
  //            author
  //            siteUrl
  //          }
  //        }
  //        ogImageDefault: file(
  //          relativePath: { eq: "hrea-social-sharing-preview.png" }
  //        ) {
  //          childImageSharp {
  //            fixed(height: 900, width: 1600) {
  //              src
  //            }
  //          }
  //        }
  //      }
  //    `
  //  )

  const { title: defaultTitle, description: defaultDescription, image, siteUrl, keywords } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    keywords,
  }

  //  const metaDescription = description || site.siteMetadata.description
  //  const ogImage = site.siteMetadata.siteUrl.concat(
  //    ogImageDefault.childImageSharp.fixed.src
  //  )

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* For Sharing (Open Graph) */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content='website' />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="keywords" content={seo.keywords.join(",")} />
      {/* favicon */}
      <link rel="icon" type="image/png" href="/acorn-icon.png" />
      {children}
    </>
    //  <Helmet
    //    htmlAttributes={{
    //      lang,
    //    }}
    //    title={title}
    //    titleTemplate={`%s | ${site.siteMetadata.title}`}
    //    meta={[
    //      {
    //        name: `description`,
    //        content: metaDescription,
    //      },
    //      {
    //        property: `og:title`,
    //        content: title,
    //      },
    //      {
    //        property: `og:image`,
    //        content: ogImage,
    //      },
    //      {
    //        property: `og:description`,
    //        content: metaDescription,
    //      },
    //      {
    //        property: `og:type`,
    //        content: `website`,
    //      },
    //      {
    //        name: `twitter:card`,
    //        content: `summary`,
    //      },
    //      {
    //        name: `twitter:creator`,
    //        content: site.siteMetadata.author,
    //      },
    //      {
    //        name: `twitter:title`,
    //        content: title,
    //      },
    //      {
    //        name: `twitter:description`,
    //        content: metaDescription,
    //      },
    //    ].concat(meta)}
    //  />
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
  title: PropTypes.string,
}

export default SEO
