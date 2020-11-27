// Gatsby supports TypeScript natively!
//ホームです。
import React from "react"
import ReactDOM from "react-dom"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "../components/card"
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
  var add = 0

  function tick() {
    if (add < 2) {
      num += 6
      const element = (
        <div className="flex flex-wrap" style={{ marginTop: 0 }}>
          {posts.map(({ node }, index) => {
            return index >= num - 6 && index < num ? (
              <article key={node.fields.slug} className="sub-card-block">
                <Card node={node} />
              </article>
            ) : null
          })}
        </div>
      )
      ReactDOM.render(element, document.getElementById(`readmore${add}`))
      add++
      if (add === 2) {
        document.getElementById(`readmore`).remove()
      }
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="flex flex-wrap">
        {posts.map(({ node }, index) => {
          return index < num ? (
            <article key={node.fields.slug} className="sub-card-block">
              <Card node={node} />
            </article>
          ) : null
        })}
      </div>
      <div id="readmore0"></div>
      <div id="readmore1"></div>

      <div className="readmore" id="readmore" onClick={tick}>
        <img src="/images/readmore.png"></img>
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
