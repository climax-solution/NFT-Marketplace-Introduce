import Footer from "../components/Footer";
import StatusBar from "../components/StatusBar";
export default function Home() {
    return (
        <>
            {/* <StatusBar/> */}
            <div className="original-buy-back">
                <div className="original-content m-auto">
                    <img src="/img/logo_header_white.png"/>
                    <h2 className="gradient">An ecosystem of NFTs representing real world assets</h2>
                    <p className="text-white">NFT Developments (NFTD$) is a reflection token rewarding holders on all transactions. NFTD$ is the fundamental token within the NFT Development ecosystem</p>
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <button className="trade-button">Our charts</button>
                        </div>
                        <div className="col-sm-6 col-12">
                            <button className="trade-button">NFT Platform</button>
                        </div>
                        <div className="col-sm-6 col-12">
                            <button className="trade-button">Pancakeswap</button>
                        </div>
                        <div className="col-sm-6 col-12">
                            <button className="trade-button">Our social</button>
                        </div>
                    </div>
                    <div className="swap-link mt-4">
                        <div className="uniswap">
                            <h6 className="text-white">BSC Contract Address</h6>
                            <span className="text-white">0x8a2d988fe2e8c6716cbcef1b33df626c692f7b98 <i className="fa fa-clone"/></span>
                        </div>
                        <div className="uniswap">
                            <h6 className="text-white">BSC Contract Address</h6>
                            <span className="text-white">0x8a2d988fe2e8c6716cbcef1b33df626c692f7b98 <i className="fa fa-clone"/></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="everise-lifecycle two_panel" id="Why">
                <div>
                    <div className="everise-block">
                        <h2 className="gradient text-left everise-lifecycle-title">How does EverRise work?</h2>
                        <div className="text-start">
                            <h5 className="text-white">EverRise is establishing the new standard of DeFi tokenomics with its innovative Buyback and burn system and revolutionary use-cases.</h5>
                            <p className="text-white">EverRise is the first to introduce the original buyback mechanism in the cryptocurrency space. With over 1700 tokens now including a buyback function in their tokenomics, it is clear EverRise's innovations are already revolutionizing the DeFi space.</p>
                            <p className="text-white">Unlike a burn from non-circulating supply, the buyback immediately transfers value to the token holders and the community by purchasing tokens from the open market to burn.</p>
                            <p className="text-white">Buyback function of the EverRise smart contract exchanges liquidity from the reserve liquidity pool for RISE tokens in the main liquidity pool. These tokens are automatically sent to the burn wallet. This adds value to the liquidity pool of the RISE token, and permanently constricts supply.</p>
                            <p className="text-white">So far 276,805,195,807,315 tokens have been burnt, 27.68% of the circulating supply. As all of these tokens were on the market, being bought and sold, this creates a true supply constriction which makes EverRise Hyper-Deflationary.</p>
                            <p className="text-white">EverRise token holders also benefit through a 2% static reflection reward from every transaction.</p>
                            <a><button className="trade-button text-center">whitepaper</button></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="img-block">
                        <img src="/img/bluehand.webp"/>
                    </div>
                </div>
            </div>
            <div className="buyback-function two_panel" id="BuyBack">
                <div className=""></div>
                <div className="buyback-block" style={{paddingBottom: "68px"}}>
                    <h2 className="gradient text-left everise-lifecycle-title">How does EverRise work?</h2>
                    <h5 className="text-white">EverRise is establishing the new standard of DeFi tokenomics with its innovative Buyback and burn system and revolutionary use-cases.</h5>
                    <p className="text-white">EverRise is the first to introduce the original buyback mechanism in the cryptocurrency space. With over 1700 tokens now including a buyback function in their tokenomics, it is clear EverRise's innovations are already revolutionizing the DeFi space.</p>
                    <p className="text-white">Unlike a burn from non-circulating supply, the buyback immediately transfers value to the token holders and the community by purchasing tokens from the open market to burn.</p>
                    <p className="text-white">Buyback function of the EverRise smart contract exchanges liquidity from the reserve liquidity pool for RISE tokens in the main liquidity pool. These tokens are automatically sent to the burn wallet. This adds value to the liquidity pool of the RISE token, and permanently constricts supply.</p>
                    <p className="text-white">So far 276,805,195,807,315 tokens have been burnt, 27.68% of the circulating supply. As all of these tokens were on the market, being bought and sold, this creates a true supply constriction which makes EverRise Hyper-Deflationary.</p>
                    <p className="text-white">EverRise token holders also benefit through a 2% static reflection reward from every transaction.</p>
                </div>
            </div>
            <div className="arrow-up"></div>
            <div className="arrow-fill"></div>
            <div className="chevron-up"></div>
            <div className="protocol-block" id="Tokenomics">
                <h1 className="gradient">The EverRise Protocol</h1>
                <p className="text-white">On the EverRise Protocol, three distinct functions occur: buyback, burn, and rewards.</p>
                <div className="protocol-column three_panel">
                    <div>
                        <div className="feature">
                            <img src="/img/002-bands-150.png"/>
                            <h2 className="gradient">Buyback</h2>
                            <p className="text-white">jWhen the buyback function is turned on, tokens are bought back from the market, resulting in an immediate effect on the price.</p>
                        </div>
                    </div>
                    <div>
                        <div className="feature">
                            <img src="/img/001-fire-150.png"/>
                            <h2 className="gradient">Burn</h2>
                            <p className="text-white">The tokens bought through buyback are immediately burned. This creates a true burn, meaning real value is exchanged for the tokens that are sent to the burn wallet.</p>
                        </div>
                    </div>
                    <div>
                        <div className="feature">
                            <img src="/img/003-gift-box-150.png"/>
                            <h2 className="gradient">Rewards</h2>
                            <p className="text-white">Holders are additionally "auto-staked" instantly receiving 2% of the transaction volume and they can watch their wallet grow in real-time.</p>
                        </div>
                    </div>
                </div>
                <h1 className="text-white">Transaction Fee Breakdown</h1>
                <div className="trans-fee three_panel text-white">
                    <div className="fee">
                        <p className="fee-number">2%</p>
                        <h2>Rewards to Holders</h2>
                        <p>Direct $RISE redistribution</p>
                    </div>
                    <div className="fee">
                        <p className="fee-number">3%</p>
                        <h2>Project Sustainability</h2>
                        <p>Enhancements, operations and marketing</p>
                    </div>
                    <div className="fee">
                        <p className="fee-number">6%</p>
                        <h2>Strategic Buyback</h2>
                        <p>For buy-back from market and burn</p>
                    </div>
                </div>
            </div>
            <div className="finance-panel">
                <div className="summary">
                    EverRise is the first cryptocurrency to implement smart analytics and tactics to beat financial adversities on the Blockchain.
                </div>
            </div>
            <div className="how-to-buy">
                <h2 className="text-white how-to-buy-title">How To Acquire <span className="gradient">EverRise</span></h2>
                <div className="video-group">
                    <video
                        preload="none"
                        controls
                        src="https://youtu.be/ZVHuAPhEQR0"
                    />
                    <video
                        preload="none"
                        controls
                        src="https://youtu.be/u2XpCjj5TFs"
                    />
                </div>
                <div>
                    <ol className="how-to-buy-panel two_panel">
                        <li>
                            <img src="/img/1.png"/>
                            <div>
                                <h3>DOWNLOAD TRUSTWALLET</h3>
                                Simply visit TRUSTWALLET.COM & download the application.<br/><br/>
                                The app is secure and widely used in the DeFi market. Remember to never share your seed phrase!
                            </div>
                        </li>
                        <li>
                            <img src="/img/2.png"/>
                            <div>
                                <h3>FUND YOUR WALLET</h3>
                                Purchase BNB or BSC (Binance Smart Chain) to fund your wallet.<br/><br/>
                                These coins are used in the Binance Smart Chain.
                            </div>
                        </li>
                        <li>
                            <img src="/img/3.png"/>
                            <div>
                                <h3>VISIT PANCAKESWAP</h3>
                                (For iPhone users, enable Trust Browser first)<br/><br/>
                                Visit PANCAKESWAP.FINANCE on your mobile browser.<br/><br/>
                                Click connect on the top right corner of the page. Click WalletConnect, and select Trust Wallet. This will open up the app. Confirm on Trust Wallet and head back to your mobile browser.
                            </div>
                        </li>
                        <li>
                            <img src="/img/4.png"/>
                            <div>
                                <h3>SWAP FOR EVERRISE</h3>
                                Select exchange from the dropdown menu on the left.<br/><br/>
                                Click ‘Select a currency’ & enter the BSC Contract Address (PancakeSwap)<br/><br/>
                                <span className="text-white">0x8a2d988fe2e8c6716cbcef1b33df626c692f7b98 <i className="fa fa-clone"/></span><br/><br/>
                                *Set your slippage to 13%
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="arrow-up"></div>
            <div className="arrow-fill"></div>
            <div className="chevron-up"></div>
            <div className="ecoystem-panel" id="EcosystemDapps">
                <img src="/img/Ecosystem-title-800.png" className="ecosystem-logo"/>
                <div className="ecosystem-card-list">
                    <div className="ecosystem-card">
                        <h4 className="text-white">$RISE</h4>
                        <img src="/img/Logo-EVR.png"/>
                        <h3>Original Buyback Hyper-Deflationary token</h3>
                        <p className="text-white">When the buyback function is turned on, tokens are bought back from the market, resulting in an immediate effect on the price.</p>
                    </div>
                    <div className="ecosystem-card">
                        <h4 className="text-white">EverOwn</h4>
                        <img src="/img/dapps-own.png"/>
                        <h3>Community Contract Ownership</h3>
                        <p className="text-white">EverOwn increases projects’ longevity by allowing renounced contract evolution with fixes and improvements through community voting. It also gives owners the ability to add a second owner to the contract.</p>
                    </div>
                    <div className="ecosystem-card">
                        <h4 className="text-white">EverWallet</h4>
                        <img src="/img/dapps-wallet.png"/>
                        <h3>Secured and Yours</h3>
                        <p className="text-white">EverWallet ensures that you and only you will have access to your tokens and without the additional concerns that arise from losing your hardware wallet, plus see accurate De-Fi prices.</p>
                    </div>
                    <div className="ecosystem-card">
                        <h4 className="text-white">EverSwap</h4>
                        <img src="/img/dapps-swap.png"/>
                        <h3>Security First De-Fi Trading</h3>
                        <p className="text-white">EverSwap allows for investors to securely swap their tokens without ever having to remove them from the safety of EverWallet. Welcome to the future of De-Fi trading.</p>
                    </div>
                    <div className="ecosystem-card">
                        <h4 className="text-white">EverSale</h4>
                        <img src="/img/dapps-sale.png"/>
                        <h3>Protected Launch</h3>
                        <p className="text-white">EverSale is a launchpad for any pre-sales powered by the EverRise Ecosystem. With EverSale, no tokens from the project will be collected as a fee ensuring projects are protected from presale dumps.</p>
                    </div>
                    <div className="ecosystem-card">
                        <h4 className="text-white">EverLock</h4>
                        <img src="/img/dapps-lock.png"/>
                        <h3>Community Powered Locking</h3>
                        <p className="text-white">EverLock is an initial liquidity locker that provides developers with a way to empower their community by utilizing community based voting for unlocking initial liquidity after an initial time period.</p>
                    </div>
                </div>
            </div>
            <div className="external-api">
                <h1>We work with</h1>
                <img src="/img/cmc.png"/>
                <img src="/img/coingecko.png"/>
                <img src="/img/nomics-2.png"/>
                <img src="/img/certik2.png"/>
                <img src="/img/bsc.png"/>
                <img src="/img/pancakeswap-cake-logo.png"/>
                <img src="/img/blockfolio.png"/>
                <img src="/img/duckdao1322.png"/>
                <img src="/img/B.png"/>
                <img src="/img/lunapr.png"/>
            </div>
            <Footer at={true}/>
        </>
    )
}