require('ts-node').register();
const { createPages } = require('./src/lib/createPages');
// const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = createPages;

// exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions
//     fmImagesToRelative(node)
//     if (node.internal.type === `MarkdownRemark`) {
//         const value = createFilePath({ node, getNode })
//         createNodeField({
//             name: `slug`,
//             node,
//             value,
//         })
//     }
// }