import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { SubCard } from "../components/card"
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
          }
        }
      }
    }
  }
`

const Ranking = ({ data }) => {
  //
  const views = data.allPageViews.edges
  const posts = data.allMarkdownRemark.edges
  const max = 10
  let scrollIndex = 0
  let preOperation = `next`
  let postResults = []
  views.forEach(edge => {
    posts.forEach(post => {
      //全ページから投稿された記事を抽出
      if (post.node.fields.slug === edge.node.path) {
        postResults.push(post.node)
      }
    })
  })
  console.log(postResults)
  function Arrow(type) {
    switch (type) {
      case `next`:
        scrollTo(`#ScrollCard${scrollIndex}`)
        preOperation = `next`
        break
      case `prev`:
        scrollTo(`#ScrollCard${scrollIndex}`)
        preOperation = `prev`
        break
      default:
        break
    }
    console.log(scrollIndex)
  }

  const pc = (
    <div className="ranking-box">
      <div className="ranking-title">RANKING</div>
      <div className="ranking-card flex">
        {postResults.map((postResult, index) => {
          return index < max ? (
            <article id={`ScrollCard${index}`} key={index} className="cards">
              <SubCard node={postResults[index]} rank={index + 1} />
            </article>
          ) : null
        })}
      </div>
      <div onClick={() => Arrow("prev")} className="ranking-left-arrow">
        <div className="left-arrow"></div>
      </div>
      <div onClick={() => Arrow("next")} className="ranking-right-arrow">
        <div className="right-arrow"></div>
      </div>
    </div>
  )

  return pc
}

export default function RankingCard() {
  const popularCard = (
    <StaticQuery query={rankingQl} render={data => <Ranking data={data} />} />
  )
  return popularCard
}
