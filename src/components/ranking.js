import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { RankingCard } from "../components/card"
import scrollTo from "gatsby-plugin-smoothscroll"

const rankingQl = graphql`
  query rankingQl {
    allPageViews(sort: { order: DESC, fields: totalCount }) {
      edges {
        node {
          totalCount
          path
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD. YYYY")
            title
            description
            featuredimage
            tags
            color
            contributor
          }
        }
      }
    }
  }
`

let scrollIndex = 2
let preOperation = `next`

const Ranking = ({ data }) => {
  //
  const views = data.allPageViews.edges
  const posts = data.allMarkdownRemark.edges
  const max = 10

  let postResults = []
  views.forEach(edge => {
    posts.forEach(post => {
      //全ページから投稿された記事を抽出
      if (post.node.fields.slug === edge.node.path) {
        postResults.push(post.node)
      }
    })
  })

  const pc = (
    <div className="ranking-box">
      <div className="ranking-card">
        <div className="dummy-left"></div>
        {postResults.map((postResult, index) => {
          return index < max ? (
            <div id={`card${index}`} key={index} className="cards">
              <RankingCard node={postResults[index]} rank={index + 1} />
            </div>
          ) : null
        })}
        <div className="dummy-right"></div>
      </div>

      <a href={`#card${scrollIndex - 1}`} className="ranking-left-arrow">
        <div className="left-arrow"></div>
      </a>
      <a href={`#card${scrollIndex + 1}`} className="ranking-right-arrow">
        <div className="right-arrow"></div>
      </a>
    </div>
  )

  return pc
}

export default function RankingQuery() {
  const ranking = (
    <StaticQuery query={rankingQl} render={data => <Ranking data={data} />} />
  )
  return ranking
}
