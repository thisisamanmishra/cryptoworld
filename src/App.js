/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import 'font-awesome/css/font-awesome.min.css';
// import {fa-facebook} from '@fortawesome/react-fontawesome';
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
          <p>A place where you get every information about Cryptocurrency and news related to them. It consists of various pages through which user get infromation about Exchanges,Total Cryptocurrencies, Market val and all news related to the Cryptocurrencies. It is made using Reactjs and RapidAPI.</p>
          <ul className="socials">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><BsGoogle /></a></li>
            <li><a href="#"><i className="fa fa-youtube" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin-square" /></a></li>
          </ul>
          <div className="footer-bottom">
            <p>copyright &copy;2022 <a href="#">CryptoWorld</a>  </p>
          </div>
          <div className="footer-menu">
            <ul className="f-menu">
              <li><a href="">Home</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>
        </div>

      </footer>
    </div>
  </div>
);

export default App;
