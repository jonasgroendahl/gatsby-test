const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    const postTemplate = path.join(__dirname, 'src/templates/template.js');

    return graphql(`
    {
        allMarkdownRemark {
            edges {
                node { 
                    html
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
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors);
        }
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            console.log("NODE", node);
            createPage({ path: node.frontmatter.path, component: postTemplate })
        })
    })
}