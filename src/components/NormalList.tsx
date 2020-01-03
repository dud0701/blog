import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Query } from '../graphql-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import '../index.css';
import './NormalList.css';

const LatestPostListQuery = graphql`
    query LatestPostListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
            edges {
                node {
                    excerpt(truncate: true, pruneLength: 100)
                    frontmatter {
                        title
                        path
                        date(formatString: "YYYY-MM-DD HH:mm:ss")
                        tag
                    }
                    id
                }
            }
        }
    }
`;

// const theme = createMuiTheme({
//     typography: {
//         fontFamily:
//     }
// })

const NormalList: React.FC = () => {
    const data = useStaticQuery<Query>(LatestPostListQuery);

    return (
        <React.Fragment>
            <h2>게시글 목록</h2>
            <ul className="card-list">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div className="blog-list">
                        <div className="list-item-content">
                            <span className="list-item-title">
                                <h3>
                                    {node.frontmatter.tag && (
                                        <span className="list-item-tag">{node.frontmatter.tag}</span>
                                    )}
                                    <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                                </h3>
                            </span>
                            <span className="list-item-content">{node.excerpt}</span>
                        </div>
                        <div className="list-item=info">
                            <span className="list-item-date">{node.frontmatter.date.substring(0, 11)}</span>
                        </div>
                    </div>
                    // <li className="card-list-item" key={node.id}>
                    //     <div className="card">
                    //         <div className="card-image">
                    //             <img src="https://placehold.it/350x150" alt="placeholder" />
                    //         </div>
                    //         <div className="card-content">
                    //             <div className="content-header">
                    //                 <h3>
                    //                     <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                    //                 </h3>
                    //                 <p className="card-date">{node.frontmatter.date.substring(0, 11)}</p>
                    //             </div>
                    //             <p>{node.excerpt}</p>
                    //         </div>
                    //     </div>
                    // </li>
                ))}
            </ul>
        </React.Fragment>
    );
};

NormalList.displayName = 'NormalList';

export default NormalList;
