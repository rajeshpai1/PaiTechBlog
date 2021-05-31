import React from 'react';
import { Button, Layout } from 'antd';
import Page from '../components/Page';

import 'styles/styles.css';
import 'styles/animate.css';

const IndexPage = () => {
    return (
        <Page>
            <Layout.Content>
                {
                    <div>
                        <div>HII ARKA GROUPS</div>
                        <Button type="primary" size="large">
                            Rajesh Aboit
                        </Button>
                    </div>
                }
            </Layout.Content>
        </Page>
    );
};
export default IndexPage;
