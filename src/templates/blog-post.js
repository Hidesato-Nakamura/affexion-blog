import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FacebookShareButton, TwitterShareButton } from "react-share"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { title, siteUrl } = data.site.siteMetadata
  console.log(data.site)
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
              <img src="/images/icons/webyounihozon.png" alt="webyounihozon" />
              <TwitterShareButton
                text={`none`}
                url={`${siteUrl}${location.pathname}`}
                via={`affexionAR`}
              >
                <img src="/images/icons/twitter_05.png" alt="twitter" />
              </TwitterShareButton>
              <FacebookShareButton url={`${siteUrl}${location.pathname}`}>
                <img src="/images/icons/facebook.png" alt="facebook" />
              </FacebookShareButton>
            </div>
          </ul>
        ) : null}
      </article>

      <nav className="nav">
        <div className="back">
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              <img alt="back" src="/images/back_03.png"></img>
            </Link>
          )}
        </div>
        <div className="toppage">
          <Link to="/">
            <img src="/images/toppage.png" alt="toppage" />
          </Link>
        </div>
        <div className="next">
          {next && (
            <Link to={next.fields.slug} rel="next">
              <img alt="prev" src="/images/next_03.png"></img>
            </Link>
          )}
        </div>
      </nav>
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
