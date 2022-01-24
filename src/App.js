import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ghoulXLogo from "./assets/GhoulX logo.png";
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
    <Switch>
      <Route path="/" exact>
        <Layout>
          <div className="header-container">
            <img src={ghoulLogo} alt="ghoulLogo" id="header-logo" />
            <div className="header-elem">
              <div id="buy-ghoul">
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x171ce6141e7a5980222bc6b757ee2f1f95b3264e"
                  target="_blank"
                >
                  {" "}
                  <div id="buy-ghoul-div">
                    {" "}
                    Buy $GHOULX
                    <img
                      src={ghoulXLogo}
                      alt="ghoulXLogo"
                      id="buy-ghoul-logo"
                    />
                  </div>
                </a>
              </div>
              <a href="https://app.ghoul.finance/" target="_blank">
                <div id="launch-app">Launch App</div>
              </a>
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
                gDai is a stablecoin backed with collateral of your crypto
                holding
              </div>
              <div className="sub-title-buttons" target="_blank">
                <a href="https://app.ghoul.finance/" target="_blank">
                  <div id="learn-more">Launch App &#62;</div>
                </a>
                <a href="https://docs.ghoul.finance/" target="_blank">
                  <div id="launch-app-2">Learn More</div>
                </a>
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
              No credit checks or approvals needed, 0% interest, pay back on
              your own timeline.
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
                  Earn GhoulX governance tokens by participating in our
                  liquidity mining programs
                </div>
                <div className="ht-card-button">Add Liquidity</div>
              </div>
              <div className="ht-card-elem">
                <img src={spendGdaiLogo} alt="" />
                <div className="ht-card-title">Spend gDai</div>
                <div className="ht-card-sub-title">
                  Be part of a community that helps govern the future of GhoulX
                  Dao
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
                <a href="https://t.me/poltergeistlabs" target="_blank">
                  <img src={telegramLogo} alt="" />
                </a>
                <a href="https://twitter.com/Poltergeistlabs" target="_blank">
                  <img src={twitterLogo} alt="" />
                </a>
              </div>
            </div>
            <div className="footer-col-2">
              <div className="row-one-c-2">
                <div className="col-title">Getting Started</div>
                <a
                  href="https://docs.ghoul.finance/tokenomics/ghoulx-token"
                  className="col-content"
                  target="_blank"
                >
                  Tokenomics
                </a>
                <a
                  href="https://docs.ghoul.finance/introduction/general"
                  className="col-content"
                  target="_blank"
                >
                  Ecosystem
                </a>
                <a href="" className="col-content" target="_blank">
                  Roadmap
                </a>
                <a
                  href="https://docs.ghoul.finance/"
                  className="col-content"
                  target="_blank"
                >
                  gDai Documentation
                </a>
                <a
                  href="https://gateway.btfs.io/btfs/QmbxSZCGygHzYgDyaUAYpBKxZAHnz3JgBka5HUcyhk6JXc"
                  className="col-content"
                  target="_blank"
                >
                  Original Darkpaper
                </a>
                <a
                  href="https://www.redbubble.com/people/poltergeistlabs/shop?asc=u"
                  className="col-content"
                  target="_blank"
                >
                  Shop
                </a>
              </div>
              <div className="row-two-c-2">
                <div className="col-title">Getting Started</div>
                <a
                  href="https://poltergeistlabs.medium.com/how-to-bridge-ghoul-tokens-from-eth-to-bsc-66bd6e11ba59"
                  className="col-content"
                  target="_blank"
                >
                  Ghoul ETH to BSC Bridge
                </a>
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x171ce6141e7a5980222bc6b757ee2f1f95b3264e"
                  className="col-content"
                  target="_blank"
                >
                  Ghoul on Pancakeswap
                </a>
                <a
                  href="https://bscscan.com/token/0x171ce6141e7a5980222bc6b757ee2f1f95b3264e"
                  className="col-content"
                  target="_blank"
                >
                  Ghoul BSC Contract
                </a>
                <a
                  href="https://etherscan.io/token/0x3bb86d867a9f3addf994cdadb210fa82f0d4157a"
                  className="col-content"
                  target="_blank"
                >
                  Ghoul ETH Contract
                </a>
                <a
                  href="https://www.coingecko.com/en/coins/ghoul-token"
                  className="col-content"
                  target="_blank"
                >
                  Ghoul on Coingecko
                </a>
              </div>
            </div>
          </div>
        </Layout>
        <Redirect from="*" to="/" />
      </Route>
    </Switch>
  );
}

export default App;
