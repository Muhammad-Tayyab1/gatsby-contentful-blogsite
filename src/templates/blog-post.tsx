import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
export const query = graphql`
query($slug: String!) {
  contentfulPost(slug: { eq: $slug }) {
    title
    publishedDate(formatString: "Do MMMM, YYYY")
    featuredImage {
      fluid(maxWidth: 750) {
        ...GatsbyContentfulFluid
      }
    }
    body {
      json
    }
  }
}
`
const BlogPost = props => {
    const options = {
        renderNode: {
          "embedded-asset-block": node => {
            const alt = node.data.target.fields.title["en-US"]
            const url = node.data.target.fields.file["en-US"].url
            return <img alt={alt} src={url} />
          },
        },
      }
    return (
      <Layout>
        <SEO title={props.data.contentfulPost.title} />
        <Link to="/blog/">Visit the Blog Page</Link>
        <div className="content">
          ...
          {props.data.contentfulPost.featuredImage && (
            <Img
              className="featured"
              fluid={props.data.contentfulPost.featuredImage.fluid}
              alt={props.data.contentfulPost.title}
            />
          )}
  
  {
  documentToReactComponents(props.data.contentfulPost.body.json, options)
}
        </div>
      </Layout>
    )
  }

export default BlogPost