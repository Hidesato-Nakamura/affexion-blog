import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { RankingCard } from "../components/card"
import scrollTo from "gatsby-plugin-smoothscroll"
import Slider from "react-slick"

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
    <div className="ranking-right-arrow" onClick={onClick}>
      <div className="right-arrow"></div>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />

    <div
      className="ranking-left-arrow"
      style={{ zIndex: 10 }}
      onClick={onClick}
    >
      <div className="left-arrow"></div>
    </div>
  )
}

let scrollIndex = 2
let preOperation = `next`

const Ranking = ({ data }) => {
  //
  const views = data.allPageViews.edges
  const posts = data.allMarkdownRemark.edges
  const max = 10
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
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
      {/* <div className="ranking-card">
        <div className="dummy-left"></div>
        {postResults.map((postResult, index) => {
          return index < max ? (
            <div id={`card${index}`} key={index} className="cards">
              <RankingCard node={postResults[index]} rank={index + 1} />
            </div>
          ) : null
        })}
        <div className="dummy-right"></div>
      </div> */}
      <div className="ranking-card">
        <Slider {...settings}>
          {postResults.map((postResult, index) => {
            return index < max ? (
              <div key={index}>
                <div className="cards">
                  <RankingCard node={postResults[index]} rank={index + 1} />
                </div>
              </div>
            ) : null
          })}
        </Slider>
      </div>
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
