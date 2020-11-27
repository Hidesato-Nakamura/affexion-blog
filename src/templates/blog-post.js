import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { title, siteUrl } = data.site.siteMetadata
  const { previous, next } = pageContext
  const tags = post.frontmatter.tags
  return (
    <Layout location={location} title={title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="blog-post">
        <div className="title"> {post.frontmatter.title}</div>
        <div className="infomations">
          <div className="date"> {post.frontmatter.date}</div>
          <div
            className="avatar"
            style={{ backgroundColor: post.frontmatter.color }}
          ></div>
          <div className="name">{post.frontmatter.contributor}</div>
        </div>

        {/* <div>閲覧数：{data.pageViews ? data.pageViews.totalCount : 0}</div> */}
        <div className="text">
          <span dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        {/* <hr
          style={{
            marginBottom: rhythm(1),
          }}
        /> */}

        {tags && tags.length ? (
          <ul className="taglist">
            {tags.map((tag, index) => (
              <Link
                to={`/tags/${tag}`}
                key={tag + `tag` + index}
                style={{ textDecorationColor: `#a8a8a8` }}
              >
                <li>
                  #{tag}
                  {/* <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link> */}
                </li>
              </Link>
            ))}
            <div className="images">
              <img src="/images/icons/webyounihozon.png" />
              {/* <a
                href={`https://${siteUrl}${location.pathname}`}
                class="react-sharing-button__link react-sharing-button--twitter"
              >
                <img src="/images/icons/twitter_05.png" />
              </a> */}
              <TwitterShareButton
                text={`none`}
                url={`${siteUrl}${location.pathname}`}
                shareText={`${post.frontmatter.title}--${title}`}
                via={`affexionAR`}
              >
                <img src="/images/icons/twitter_05.png" />
              </TwitterShareButton>
              <FacebookShareButton url={`${siteUrl}${location.pathname}`}>
                <img src="/images/icons/facebook.png" />
              </FacebookShareButton>
            </div>
          </ul>
        ) : null}
      </article>

      <nav
        style={{
          display: `none`,
          flexWrap: `wrap`,
          listStyle: `none`,
          padding: 0,
          marginBottom: 50,
        }}
      >
        <div style={{ float: "left" }}>
          {next && (
            <Link to={next.fields.slug} rel="next">
              ← next
            </Link>
          )}
        </div>
        <div style={{ float: "right" }}>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              prev →
            </Link>
          )}
        </div>
      </nav>
      <div style={{ textAlign: `center`, marginTop: `70px` }}>
        <Link to="/">
          <img style={{ marginBottom: 0 }} src="/images/toppage.png" />
        </Link>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD. YYYY")
        description
        contributor
        color
        tags
      }
    }
    pageViews(id: { eq: $slug }) {
      totalCount
    }
  }
`
