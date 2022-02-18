import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ghoulXLogo from "./assets/GhoulX_logo.png";
import gdaiLogo from "./assets/gdai_logo.svg";
import borrowLogo from "./assets/borrow.svg";
import hodlLogo from "./assets/hodl.svg";
import tradeLogo from "./assets/trade.svg";
import spendGdaiLogo from "./assets/spendgdai.svg";
import launchAppArrow from "./assets/launchAppArrow.svg";
import twitterLogo from "./assets/twitter.svg";
import telegramLogo from "./assets/telegram.svg";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <div className="header-container">
            <img src={gdaiLogo} alt="gdaiLogo" id="header-logo" />
            <div className="header-elem">
              <div id="buy-ghoul">
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0xcfc5cf2a73e97401c218b7ce1c594524bd8ba4bf"
                  target="_blank"
                  rel="noreferrer"
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
              <a href="https://app.ghoul.finance/" >
                <div id="launch-app">Launch App</div>
              </a>
            </div>
          </div>
          <div className="horiz-line-mobile"></div>
          <div className="hero-one-container">
            <div className="hero-one-content">
              <div className="title-1">GhostDAI The</div>
              <div className="title-2">
                <span id="percent">0%</span> Interest Stablecoin
              </div>
              <div className="sub-title">
                gDAI is a stablecoin backed with collateral of your crypto
                holdings
              </div>
              <div className="sub-title-buttons" target="_blank">
                <a href="https://app.ghoul.finance/" >
                  <div id="learn-more">Launch App &#62;</div>
                </a>
                <a href="https://docs.ghoul.finance/" target="_blank" rel="noreferrer">
                  <div id="launch-app-2">Learn More</div>
                </a>
              </div>
              {/* <div className="volume-cards">
                <div className="volume-card-elem">
                  <div className="trading-volume">TOTAL VALUE LOCKED</div>
                  <div className="dollar-value">$1,000,000</div>
                </div>
                <div className="volume-card-elem">
                  <div className="trading-volume">TOTAL TRADING VOLUME</div>
                  <div className="dollar-value">$1,000,000</div>
                </div>
                <div className="volume-card-elem">
                  <div className="trading-volume">24HR TRADING VOLUME</div>
                  <div className="dollar-value">$1,000,000</div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="hero-two-container">
            <div className="horiz-line"></div>
            <div className="hero-two-subtitle">
              Unlock the value of your crypto assets while you HODL.<br/> No credit checks or approvals needed, 0% interest, pay back on
              your own timeline.
            </div>
            <div className="hero-two-cards">
              <div className="ht-card-elem">
                <div className="ht-card-img">
                  <img src={borrowLogo} alt="" />
                </div>
                <div className="ht-card-title">Borrow</div>
                <div className="ht-card-sub-title">
                  Add your crypto assets to personal vaults and borrow up to 2/3 of their value in gDAI.
                </div>
                <a href="https://app.ghoul.finance/#/vaults" target="_blank" rel="noreferrer"><div className="ht-card-button">Create Vault</div></a>
              </div>
              <div className="ht-card-elem">
                <img src={tradeLogo} alt="" />
                <div className="ht-card-title">Trade</div>
                <div className="ht-card-sub-title">
                  Spend your gDAI, swap them ~1:1 for other stablecoins or trade them for other tokens.
                </div>
                <a href="https://app.ghoul.finance/#/swap" target="_blank" rel="noreferrer"><div className="ht-card-button">Swap Tokens</div></a>
              </div>
              <div className="ht-card-elem">
                <img src={hodlLogo} alt="" />
                <div className="ht-card-title">Farm</div>
                <div className="ht-card-sub-title">
                  Earn GhoulX governance tokens by participating in our liquidity mining programs.
                </div>
                <a href="https://app.ghoul.finance/#/farm" target="_blank" rel="noreferrer"><div className="ht-card-button">Add Liquidity</div></a>
              </div>
              <div className="ht-card-elem">
                <img src={spendGdaiLogo} alt="" />
                <div className="ht-card-title">Participate</div>
                <div className="ht-card-sub-title">
                  Be part of the GhoulDAO community that helps improve and govern the future of the protocol.
                </div>
                <a href="https://snapshot.org/#/ghouldao.eth" target="_blank" rel="noreferrer"><div className="ht-card-button">Govern gDAI</div></a>
              </div>
            </div>
            <a href="https://app.ghoul.finance/" >
            <div className="launch-app">
              Launch App
              <span id="launch-app-arrow">
                {" "}
                <img src={launchAppArrow} alt="" />
              </span>
            </div>
            </a>
            <br/><br/>
            <a href="https://docs.ghoul.finance/" target="_blank" rel="noreferrer">
            <div className="launch-app-2">
              View Documentation
            </div>
            </a>

          </div>
          <div className="footer-container">
            <div className="footer-col-1">
              <div className="row-one-c-1">
                <img src={gdaiLogo} alt="" />
                <div className="by-p-labs">By Poltergiest Labs</div>
              </div>
              <div className="row-two-c-1">
                <a href="https://t.me/poltergeistlabs" target="_blank" rel="noreferrer">
                  <img src={telegramLogo} alt="" />
                </a>
                <a href="https://twitter.com/Poltergeistlabs" target="_blank" rel="noreferrer">
                  <img src={twitterLogo} alt="" />
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
