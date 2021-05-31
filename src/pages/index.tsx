import { Button, Layout, Card, Col, Row } from 'antd';
import Page from '../components/Page';
import React, { Component } from "react";
import { View, Text } from 'react-native';
import axios from "axios";
import 'styles/styles.css';
import 'styles/animate.css';

const IndexPage = () => {


  // axios("https://paitechblog-default-rtdb.firebaseio.com/articles.json")
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentWillMount() {
    this.renderMyData();
  }

  renderMyData(){
    fetch('https://your url')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Page>
      <Layout.Content>
        <div>
          <header>
            <h1>Cool Articles</h1>
          </header>
          <div className="band">
            <div className="item-1">
              <a href='${data.results[0].url}' className="card">
                <div className="thumb" style={{ backgroundImage: 'url(${data.results[0].urlToImage})' }} />
                <article>
                  <h1>data.results[0].title</h1>
                  <span>data.results[0].description</span>
                </article>
              </a>
            </div>
            <div className="item-2">
              <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" className="card">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png)' }} />
                <article>
                  <h1>How to Conduct Remote Usability Testing</h1>
                  <span>Harry Brignull</span>
                </article>
              </a>
            </div>
            <div className="item-3">
              <a href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724" className="card">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg)' }} />
                <article>
                  <h1>Created by You, July Edition</h1>
                  <p>Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community! </p>
                  <span>Melody Nieves</span>
                </article>
              </a>
            </div>
            <div className="item-4">
              <a href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826" className="card">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png)' }} />
                <article>
                  <h1>How to Code a Scrolling “Alien Lander” Website</h1>
                  <p>We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down.</p>
                  <span>Kezz Bracey</span>
                </article>
              </a>
            </div>
            <div className="item-5">
              <a href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139" className="card">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg)' }} />
                <article>
                  <h1>How to Create a “Stranger Things” Text Effect in Adobe Photoshop</h1>
                  <span>Rose</span>
                </article>
              </a>
            </div>
            <div className="item-6">
              <a href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338" className="card">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg)' }} />
                <article>
                  <h1>5 Inspirational Business Portraits and How to Make Your Own</h1>
                  <span>Marie Gardiner</span>
                </article>
              </a>
            </div>
            <div className="item-7">
              <a href="https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281" className="card">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png)' }} />
                <article>
                  <h1>Notes From Behind the Firewall: The State of Web Design in China</h1>
                  <span>Kendra Schaefer</span>
                </article>
              </a>
            </div>
          </div>
        </div>
      </Layout.Content>
    </Page>
  );
};
export default IndexPage;
