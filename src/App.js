import logo from "./logo.svg";
import Layout from "./components/layout/Layout";
import ghoulXLogo from "./assets/ghoulX_logo.svg";
import ghoulLogo from "./assets/ghoul_logo.svg";
import borrowLogo from "./assets/borrow.svg";
import hodlLogo from "./assets/hodl.svg";
import tradeLogo from "./assets/trade.svg";
import spendGdaiLogo from "./assets/spendgdai.svg";
import launchAppArrow from "./assets/launchAppArrow.svg";
import twitterLogo from "./assets/twitter (2).svg";
import telegramLogo from "./assets/telegram (2).svg";
import "./App.css";

function App() {
  return (
    <Layout>
      <div className="header-container">
        <img src={ghoulLogo} alt="ghoulLogo" id="header-logo" />
        <div className="header-elem">
          <div id="buy-ghoul">
            <div> Buy $GHOULX</div>
            <img src={ghoulXLogo} alt="ghoulXLogo" id="buy-ghoul-logo" />
          </div>
          <div id="launch-app">Launch App</div>
        </div>
      </div>
      <div className="horiz-line-mobile"></div>
      <div className="hero-one-container">
        <div className="hero-one-content">
          <div className="title-1">GhostDai The</div>
          <div className="title-2">
            <span id="percent">0%</span> Interest Stablecoin
          </div>
          <div className="sub-title">
            gDai is a stablecoin backed with collateral of your crypto holding
          </div>
          <div className="sub-title-buttons">
            <div id="learn-more">Launch App &#62;</div>
            <div id="launch-app-2">Learn More</div>
          </div>
          <div className="volume-cards">
            <div className="volume-card-elem">
              <div className="trading-volume">TOTAL TRADING VOLUME</div>
              <div className="dollar-value">$1,000,000</div>
            </div>
            <div className="volume-card-elem">
              <div className="trading-volume">24HR TRADING VOLUME</div>
              <div className="dollar-value">$1,000,000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-two-container">
        <div className="horiz-line"></div>
        <div className="hero-two-subtitle">
          No credit checks or approvals needed, 0% interest, pay back on your
          own timeline.
        </div>
        <div className="hero-two-cards">
          <div className="ht-card-elem">
            <div className="ht-card-img">
              <img src={borrowLogo} alt="" />
            </div>
            <div className="ht-card-title">Borrow</div>
            <div className="ht-card-sub-title">
              Use your crypto to borrow up to 2/3 of their value in gDAI.
            </div>
            <div className="ht-card-button">Buy gDai</div>
          </div>
          <div className="ht-card-elem">
            <img src={hodlLogo} alt="" />
            <div className="ht-card-title">Hodl</div>
            <div className="ht-card-sub-title">
              No credit checks or approvals needed, 0% interest, pay back on
              your own timeline.
            </div>
            <div className="ht-card-button">Borrow</div>
          </div>
          <div className="ht-card-elem">
            <img src={tradeLogo} alt="" />
            <div className="ht-card-title">Trade</div>
            <div className="ht-card-sub-title">
              Earn GhoulX governance tokens by participating in our liquidity
              mining programs
            </div>
            <div className="ht-card-button">Add Liquidity</div>
          </div>
          <div className="ht-card-elem">
            <img src={spendGdaiLogo} alt="" />
            <div className="ht-card-title">Spend gDai</div>
            <div className="ht-card-sub-title">
              Be part of a community that helps govern the future of GhoulX Dao
            </div>
            <div className="ht-card-button">Earn GhoulX</div>
          </div>
        </div>
        <div className="launch-app">
          Launch App
          <span id="launch-app-arrow">
            {" "}
            <img src={launchAppArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-col-1">
          <div className="row-one-c-1">
            <img src={ghoulLogo} alt="" />
            <div className="by-p-labs">By Poltergiest Labs</div>
          </div>
          <div className="row-two-c-1">
            <img src={telegramLogo} alt="" />
            <img src={twitterLogo} alt="" />
          </div>
        </div>
        <div className="footer-col-2">
          <div className="row-one-c-2">
            <div className="col-title">Getting Started</div>
            <a href="" className="col-content">
              Tokenomics
            </a>
            <a href="" className="col-content">
              Ecosystem
            </a>
            <a href="" className="col-content">
              Roadmap
            </a>
            <a href="" className="col-content">
              gDai Documentation
            </a>
            <a href="" className="col-content">
              Original Darkpaper
            </a>
            <a href="" className="col-content">
              Shop
            </a>
          </div>
          <div className="row-two-c-2">
            <div className="col-title">Getting Started</div>
            <a href="" className="col-content">
              Ghoul ETH to BSC Bridge
            </a>
            <a href="" className="col-content">
              Ghoul on Pancakeswap
            </a>
            <a href="" className="col-content">
              Ghoul BSC Contract
            </a>
            <a href="" className="col-content">
              Ghoul ETH Contract
            </a>
            <a href="" className="col-content">
              Ghoul on Coingecko
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
