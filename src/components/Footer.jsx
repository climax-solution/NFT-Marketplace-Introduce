export default function Footer ({at}) {
    return (
        <div className="footer">
            {
                !at &&
                <div className="footer-arrow-group">
                    <div className="arrow-up"></div>
                    <div className="arrow-fill"></div>
                    <div className="chevron-up"></div>
                </div>
            }
            <img src="/img/logo_header_white.png" className="footer-logo"/>
            <div className="">
                {
                    at &&
                    <div className="footer-btn-group" style={{padding: "30px"}}>
                        <button className="trade-button">liquidity locked</button>
                        <button className="trade-button">certik audit</button>
                        <button className="trade-button">techrate audit</button>
                    </div>
                }
                <div className="socials">
                    <a><img src="/img/3rd-party/twitter.png"/></a>
                    <a><img src="/img/3rd-party/instagram.png"/></a>
                    <a><img src="/img/3rd-party/telegram.png"/></a>
                    <a><img src="/img/3rd-party/reddit.png"/></a>
                    <a><img src="/img/3rd-party/discord.png"/></a>
                    <a><img src="/img/3rd-party/youtube.png"/></a>
                    <a><img src="/img/3rd-party/BscScan.png"/></a>
                </div>
                <div className="">
                    <p className="text-muted">Copyright © 2021 EverRise<br/>
                    EverRise token is not available to retail buyers in the US</p>
                </div>
            </div>
        </div>
    )
}