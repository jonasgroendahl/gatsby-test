import React from 'react'
import { Link, graphql } from 'gatsby'

export default function blog({ data }) {
    return (
        <div>
            <h1>Latest posts</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>Posted by {post.node.frontmatter.author}</small>
                    <br />
                    <br />
                    <Link to={post.node.frontmatter.path}>Go to post</Link>
                </div>
            ))}
        </div>
    )
}

export const pageQuery = graphql`
query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                 node { 
                    id 
                    frontmatter { 
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
}
`;