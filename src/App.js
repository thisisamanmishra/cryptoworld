/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      {/* <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          <Link to="/">
            Cryptoworld.
          </Link> <br />
          Made by <a href="https://linkedin.com/in/iamamanmishra">Aman</a>
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
      </div> */}
      <footer>
        <div className="footer-content">
          <h3>CRYPTOWORLD</h3>
          <p>Crypto World features the latest news and daily trading updates from the digital currency markets and provides viewers a look at whats ahead with high-profile interviews, explainers and unique stories from the ever-changing crypto industry.</p>
          <ul className="socials">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a href="#"><i className="fa fa-youtube" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin-square" /></a></li>
          </ul>

        </div>

      </footer>
    </div>
  </div>
);

export default App;
