import React from "react";
import { Button, Layout, Card, Col, Row } from 'antd';
import 'styles/styles.css';
import 'styles/animate.css';
import Page from '../components/Page';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import CreatePost from "components/CreatePost/CreatePost";


const queryClient = new QueryClient();

const IndexPage = () => {  

  return (
    <Page>
      <Layout.Content>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <CreatePost />
          </BrowserRouter>
      </QueryClientProvider>
      </Layout.Content>
    </Page>
  );
};
export default IndexPage;