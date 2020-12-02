import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// 画像ファイルパスをプロパティに取るようなコンポーネントを定義
export default ({ filename }) => (
  // ページじゃないコンポーネントでもGraphQLが使えるように
  // StaticQueryタグを使う
  <StaticQuery
    // GraphQLのクエリ引数には何も指定しない！
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    `}
    // 全画像情報がdataに代入されている

    render={data => {
      // 指定した画像ファイルパス（コンポーネントのプロパティ）と
      // 一致するgatsby-image用の情報を取得
      console.log(data)
      const image = data.images.edges.find(edge => {
        // console.log(n)
        return edge.node.relativePath.includes(filename)
      })
      console.log(filename)

      if (!image) {
        console.log("cant find image")
        return
      }

      // Imgタグでgatsby-imageで最適化された画像を表示する
      const imageSizes = image.node.childImageSharp.fluid
      return <Img fluid={imageSizes} />
    }}
  />
)
