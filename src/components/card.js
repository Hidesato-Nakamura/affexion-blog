import React from "react"
import { Link } from "gatsby"
import Image from "../components/customFitImage"

export const RankingCard = ({ node, rank }) => {
  const frontmatter = node.frontmatter
  const slug = node.fields.slug
  let card = (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <section className="sub-card">
        <div className="card-img-block2">
          <Image filename={frontmatter.featuredimage} />
          {/* <img src= alt="" /> */}
        </div>

        <div className="card-content">
          <div className="title-line-1 flex">
            {rank}位 : {frontmatter.title}
          </div>

          <div className="discription">{frontmatter.description}</div>
        </div>

        <div className="profile3 flex">
          <div
            className="avatar"
            style={{ backgroundColor: frontmatter.color }}
          />
          <div className="name">{frontmatter.contributor}</div>
        </div>
      </section>
    </Link>
  )
  return card
}

export const Card = ({ node }) => {
  const frontmatter = node.frontmatter
  const slug = node.fields.slug
  var tags = frontmatter.tags
  tags.forEach((tag, index) => {
    tags[index] = tag.toLowerCase()
  })
  let card = (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <section className="sub-card">
        <div className="card-img-block">
          <Image filename={frontmatter.featuredimage} />
        </div>
        <div className="card-content">
          <div className="date">{frontmatter.date}</div>
          <div className="title-line-2 flex">{frontmatter.title}</div>
          <div className="tag flex">
            {frontmatter.tags.map((tag, index) => {
              return <div key={index}>#{tag}</div>
            })}
          </div>
        </div>

        <div className="profile flex">
          <div
            className="avatar"
            style={{ backgroundColor: frontmatter.color }}
          />
          <div className="name">{frontmatter.contributor}</div>
        </div>
        <div className="profile2 flex">
          <div
            className="avatar"
            style={{ backgroundColor: frontmatter.color }}
          />
          <div className="name">{frontmatter.contributor}</div>
        </div>
      </section>
    </Link>
  )
  return card
}
