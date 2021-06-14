import React from "react";
import { Button, Layout, Card, Col, Row } from 'antd';
import axios from "axios";
import 'styles/styles.css';
import 'styles/animate.css';
import Page from '../components/Page';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components"
// import preset from '@rebass/preset'
import App from "../App/App.js"


const queryClient = new QueryClient();

const IndexPage = () => {  

  return (
    <Page>
      <Layout.Content>
        <QueryClientProvider client={queryClient}>
        {/* <ThemeProvider theme={preset}> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </ThemeProvider> */}
      </QueryClientProvider>
      </Layout.Content>
    </Page>
  );
};
export default IndexPage;