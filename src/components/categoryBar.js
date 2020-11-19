import React from "react"
import _ from "lodash"
import { Link, graphql, StaticQuery } from "gatsby"

const categoryQl = graphql`
  query categoryQl {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`

//①全てのタグを検索する
//②数を調べてtotalCountsにオブジェクトとして格納し直す
//（）内にタグの数を表示させる。

const CategoryBarContents = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  let tags = []
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  tags = _.uniq(tags)

  let tagsList = []

  tags.forEach(tag => {
    let count = 0
    posts.forEach(edge => {
      edge.node.frontmatter.tags.forEach(_tag => {
        if (_tag === tag) {
          ++count
        }
      })
    })
    tagsList.push({
      tag: tag,
      totalCount: count,
    })
  })

  const bar = (
    <div className="category-bar flex">
      {tagsList.map(
        list => (
          // list && list.length ? (
          <Link to={`/tags/${list.tag}/`} className="link" key={list.tag}>
            <div className="category-tag">
              <span style={{ color: `#deff00` }}>#</span>
              <span>{list.tag}</span>
              {/* ({`${list.totalCount}`}) */}
            </div>
          </Link>
        )
        // ) : null
      )}
    </div>
  )

  return bar
}

export default function CategoryBar() {
  const categoryCard = (
    <StaticQuery
      query={categoryQl}
      render={data => <CategoryBarContents data={data} />}
    />
  )
  return categoryCard
}
