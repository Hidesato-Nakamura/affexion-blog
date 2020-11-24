import React from "react"
import { Link } from "gatsby"

export const MainCard = ({ node }) => {
  const frontmatter = node.frontmatter
  const slug = node.fields.slug
  let card = (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <section className="main-card flex">
        <div className="card-img-block main">
          <img src={frontmatter.featuredimage} alt="" />
        </div>

        <div className="card-content">
          <div className="tag flex">
            {frontmatter.tags.map((tag, index) => {
              return <div key={index}>#{tag}</div>
            })}
          </div>
          <div className="title">{frontmatter.title}</div>
          <div className="date">{frontmatter.date}</div>
          <div className="text">{frontmatter.description}</div>
        </div>
      </section>
    </Link>
  )
  return card
}

export const SubCard = ({ node, rank }) => {
  const frontmatter = node.frontmatter
  const slug = node.fields.slug
  var w = typeof window !== `undefined` ? window : null
  var wi = typeof window !== `undefined` ? w.innerWidth : null
  let card = (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <section className="sub-card">
        {rank === 0 && wi < 750 ? (
          <div className="card-img-block">
            <img src={frontmatter.featuredimage} alt="" />
          </div>
        ) : (
          <div className="card-img-block2">
            <img src={frontmatter.featuredimage} alt="" />
          </div>
        )}

        <div className="card-content">
          {rank === 0 ? <div className="date">{frontmatter.date}</div> : null}

          {rank > 0 ? (
            <div className="title-line-1 flex">
              {rank}位 : {frontmatter.title}
            </div>
          ) : (
            <div className="title-line-2 flex">{frontmatter.title}</div>
          )}

          {rank > 0 && wi >= 750 ? (
            <div className="discription">{frontmatter.description}</div>
          ) : null}
          {rank > 0 && typeof window !== `undefined` ? null : (
            <div className="tag flex">
              {frontmatter.tags.map((tag, index) => {
                return <div key={index}>#{tag}</div>
              })}
            </div>
          )}
        </div>
        {rank === 0 && wi < 750 ? (
          <div className="profile2 flex">
            <div
              className="avatar"
              style={{ backgroundColor: frontmatter.color }}
            />
            <div className="name">{frontmatter.contributor}</div>
          </div>
        ) : (
          <div className="profile flex">
            <div
              className="avatar"
              style={{ backgroundColor: frontmatter.color }}
            />
            <div className="name">{frontmatter.contributor}</div>
          </div>
        )}
      </section>
    </Link>
  )
  return card
}
