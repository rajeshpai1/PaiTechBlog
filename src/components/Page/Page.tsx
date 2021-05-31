import React from 'react';
import { Layout } from 'antd';

import Header from 'components/Header';
import Footer from 'components/Footer';

import '../../styles/antd.less';
import '../../styles/reset.css';

const Page = ({ children }: { children: any }) => {
    return (
        <Layout>
            <Header />
            <Layout.Content>{children}</Layout.Content>
            <Footer />
        </Layout>
    );
};

export default Page;
