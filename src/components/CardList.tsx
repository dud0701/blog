// import React from 'react';
// import { Link, graphql, useStaticQuery } from 'gatsby';
// import { Query } from '../graphql-types';

// import Layout from '../components/layout';
// import Image from '../components/image';
// import SEO from '../components/seo';
// import './CardList.css';

// const LatestPostListQuery = graphql`
//     query LatestPostListQuery {
//         allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
//             edges {
//                 node {
//                     excerpt(truncate: true, pruneLength: 100)
//                     frontmatter {
//                         title
//                         path
//                         date(formatString: "YYYY-MM-DD HH:mm:ss")
//                     }
//                     id
//                 }
//             }
//         }
//     }
// `;

// const CardList: React.FC = () => {
//     const data = useStaticQuery<Query>(LatestPostListQuery);

//     return (
//         <React.Fragment>
//             <h1>최근 작성한 게시글 목록</h1>
//             <ul className="card-list">
//                 {data.allMarkdownRemark.edges.map(({ node }) => (
//                     <li className="card-list-item" key={node.id}>
//                         <div className="card">
//                             <div className="card-image">
//                                 <img src="https://placehold.it/350x150" alt="placeholder" />
//                             </div>
//                             <div className="card-content">
//                                 <div className="content-header">
//                                     <h3>
//                                         <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
//                                     </h3>
//                                     <p className="card-date">{node.frontmatter.date.substring(0, 11)}</p>
//                                 </div>
//                                 <p>{node.excerpt}</p>
//                             </div>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </React.Fragment>
//     );
// };

// CardList.displayName = 'CardList';

// export default CardList;
