import { Button, Layout, Card, Col, Row } from 'antd';
import axios from "axios";
import 'styles/styles.css';
import 'styles/animate.css';
import Page from '../components/Page';

import React from "react";
import ReactDOM from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from "/Users/user1/Downloads/PaitechBlog/src/App/App.js";
// import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components"
import preset from '@rebass/preset'

  
  // axios("https://paitechblog-default-rtdb.firebaseio.com/articles.json")

const queryClient = new QueryClient();

// import { Button, Layout, Card, Col, Row } from 'antd';
// import Page from '../components/Page';
// import React, { Component } from "react";
// import { View, Text } from 'react-native';
// import axios from "axios";
// import 'styles/styles.css';
// import 'styles/animate.css';

const IndexPage = () => {


  // axios("https://paitechblog-default-rtdb.firebaseio.com/articles.json")
  

  return (
    <Page>
      <Layout.Content>
        <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={preset}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
      </Layout.Content>
    </Page>
  );
};
export default IndexPage;