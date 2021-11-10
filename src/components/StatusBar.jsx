import Marquee from "react-easy-marquee";
export default function StatusBar() {
    return (
        <Marquee
            duration={30000}
            reverse={true}
            pauseOnHover={true}
            height="25px"
            background="#00152E"
        >
            <h4>This is testing</h4>
        </Marquee>
    )
}