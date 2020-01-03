import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Query } from '../graphql-types';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import CardList from '../components/CardList';
import NormalList from '../components/NormalList';

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <NormalList />
        </Layout>
    );
};

export default IndexPage;
