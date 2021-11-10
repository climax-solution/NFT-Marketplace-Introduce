import TeamHeader from "../components/TeamHeader"
import Footer from "../components/Footer";

export default function Team() {
    return (
        <div>
            <TeamHeader/>
            <div className="main">
                <h2 className="gradient">Who We Are</h2>
                <div className="ecoystem-panel">
                    <div className="team-card-list">
                        <div className="team-card border-gradient">
                            <img src="/img/Logo-EVR.png" className="rounded-circle"/>
                            <div className="member-info">
                                <h3 className="user-name">SURESH MADDINENI</h3>
                                <h4 className="user-pos">CEO & Founder</h4>
                            </div>
                        </div>
                        <div className="team-card border-gradient">
                            <img src="/img/Logo-EVR.png" className="rounded-circle"/>
                            <div className="member-info">
                                <h3 className="user-name">SURESH MADDINENI</h3>
                                <h4 className="user-pos">CEO & Founder</h4>
                            </div>
                        </div>
                        <div className="team-card border-gradient">
                            <img src="/img/Logo-EVR.png" className="rounded-circle"/>
                            <div className="member-info">
                                <h3 className="user-name">SURESH MADDINENI</h3>
                                <h4 className="user-pos">CEO & Founder</h4>
                            </div>
                        </div>
                        <div className="team-card border-gradient">
                            <img src="/img/Logo-EVR.png" className="rounded-circle"/>
                            <div className="member-info">
                                <h3 className="user-name">SURESH MADDINENI</h3>
                                <h4 className="user-pos">CEO & Founder</h4>
                            </div>
                        </div>
                        <div className="team-card border-gradient">
                            <img src="/img/Logo-EVR.png" className="rounded-circle"/>
                            <div className="member-info">
                                <h3 className="user-name">SURESH MADDINENI</h3>
                                <h4 className="user-pos">CEO & Founder</h4>
                            </div>
                        </div>
                        <div className="team-card border-gradient">
                            <img src="/img/Logo-EVR.png" className="rounded-circle"/>
                            <div className="member-info">
                                <h3 className="user-name">SURESH MADDINENI</h3>
                                <h4 className="user-pos">CEO & Founder</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer at={false}/>
        </div>
    )
}