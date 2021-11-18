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
                    <a href="https://twitter.com/NFTDevelopments" target="_blank"><img src="/img/socials/twitter.png"/></a>
                    <a href="https://instagram.com/NFTDevelopments" target="_blank"><img src="/img/socials/instagram.png"/></a>
                    <a href="https://tiktok.com/@NFTDevelopments" target="_blank"><img src="/img/socials/tiktok.png"/></a>
                    <a href="https://www.youtube.com/channel/UCbPW7kuPqflfqplBZy8knsg" target="_blank"><img src="/img/socials/youtube.png"/></a>
                    <a href="https://www.linkedin.com/in/nft-developments-372a08222/" target="_blank"><img src="/img/socials/linkedin.png"/></a>
                    <a href="mailto:Enquire@NFTDevelopments.com" target="_blank"><img src="/img/socials/mail.png"/></a>
                    <a href="https://t.me/NFTdevelopments" target="_blank"><img src="/img/socials/telegram.png"/></a>
                </div>
                <div className="">
                    <p className="text-muted">Copyright © 2021 EverRise<br/>
                    EverRise token is not available to retail buyers in the US</p>
                </div>
            </div>
        </div>
    )
}