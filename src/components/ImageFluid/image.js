import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({ src, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coal1: file(relativePath: { eq: "coal1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coal2: file(relativePath: { eq: "coal2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Coal_Product_1: file(relativePath: { eq: "Coal_Product_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CEO_Bkg: file(relativePath: { eq: "ceo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ceo_saab: file(relativePath: { eq: "ceo_saab.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {src === "logo" ? (
        <Img fluid={data.logo.childImageSharp.fluid} alt={alt} />
      ) : src === "coal1" ? (
        <Img fluid={data.coal1.childImageSharp.fluid} alt={alt} />
      ) : src === "coal2" ? (
        <Img fluid={data.coal2.childImageSharp.fluid} alt={alt} />
      ) : src === "Coal_Product_1" ? (
        <Img fluid={data.Coal_Product_1.childImageSharp.fluid} alt={alt} />
      ) : src === "CEO_Bkg" ? (
        <Img fluid={data.CEO_Bkg.childImageSharp.fluid} alt={alt} />
      ) : src === "ceo_saab" ? (
        <Img fluid={data.ceo_saab.childImageSharp.fluid} alt={alt} />
      ) : null}
    </>
  )
}

export default Image
