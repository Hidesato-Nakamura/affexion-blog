// Gatsby supports TypeScript natively!
//ホームです。
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import { MainCard, SubCard } from "../components/card"
// import Ranking from "../components/ranking"
// import PageNation from "../components/pagination"

// import App from "../p5/p5"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          featuredimage: String
          contributor: String
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  var w = typeof window !== `undefined` ? window : null
  var wi = typeof window !== `undefined` ? w.innerWidth : null
  var num = wi !== null && wi >= 750 ? 6 : 7
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {/* <App /> */}
      {/* <Link to="/admin/">login</Link> */}
      {/* <Bio /> */}
      {/* <h1>新着記事</h1>ß */}
      {/* {posts.map(({ node }, index) => {
        return index == 0 ? (
          <article key={node.fields.slug}>
            <MainCard node={node} />
          </article>
        ) : null
      })} */}
      <div className="flex flex-wrap">
        {posts.map(({ node }, index) => {
          return index < num ? (
            <article key={node.fields.slug} className="sub-card-block">
              <SubCard node={node} rank={0} />
            </article>
          ) : null
        })}
      </div>

      <div className="pgn flex">
        <div className="read-more">READ MORE</div>
        <div className="arrow" />
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 16
    ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD. YYYY")
            title
            description
            contributor
            color
            featuredimage
            tags
          }
        }
      }
    }
  }
`
