import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <hr style={{width: "70%", opacity: "50%"}}/>

            <div className="Foo">
                <div className="col">
                    <h4>Learn React</h4>
                    <a href="https://www.knackroot.com/">Quick Start</a>
                    <a href="https://www.knackroot.com/">Installation</a>
                    <a href="https://www.knackroot.com/">Describing the UI</a>
                    <a href="https://www.knackroot.com/">Adding Interactivity</a>
                    <a href="https://www.knackroot.com/">Managing State</a>
                    <a href="https://www.knackroot.com/">Escape Hatches</a>
                </div>


                <div className="col">
                    <h4>API Reference</h4>
                    <a href="https://www.knackroot.com/">React APIs</a>
                    <a href="https://www.knackroot.com/">React DOM APIs</a>
                </div>


                <div className="col">
                    <h4>Community</h4>
                    <a href="https://www.knackroot.com/">Code of Conduct</a>
                    <a href="https://www.knackroot.com/">Meet the Team</a>
                    <a href="https://www.knackroot.com/">Docs Contributors</a>
                    <a href="https://www.knackroot.com/">Acknowledgements</a>
                </div>


                <div className="col">
                    <h4>More</h4>
                    <a href="https://www.knackroot.com/">Blog</a>
                    <a href="https://www.knackroot.com/">React Native</a>
                    <a href="https://www.knackroot.com/">Privacy</a>
                    <a href="https://www.knackroot.com/">Terms</a>
                </div>

            </div>

        </div>
    )
}

export default Footer;