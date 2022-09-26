import './Expertise.css';
import MobileAppDev from '../assets/mobile app development 1.png';
import WebDevelopment from '../assets/web-development 1.png';
import WebDesigner from '../assets/Web-Designing 1.png';

export default function Expertise(){
    return(
<section id="expertise">
            <div className="description">
                <h2>Special Expertise from Us</h2>
                <div></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    augue et pharetra dolor pharetra, convallis turpis euismod
                    ultrices. Netus nisl pretium sapien egestas vestibulum
                    felis. Nisi orci.
                </p>
            </div>


            <div className="cards">
                <div className="card">
                    <img src={MobileAppDev} alt="" />
                    <h3>Mobile Apps</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In dictum mauris non pellentesque accumsan. Nec
                        pellentesque eget.
                    </p>
                </div>
                <div className="card">
                    <img src={WebDevelopment} alt="" />
                    <h3>Website Apps</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In dictum mauris non pellentesque accumsan. Nec
                        pellentesque eget.
                    </p>
                </div>
                <div className="card">
                    <img src={WebDesigner} alt="" />
                    <h3>UI UX Design</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In dictum mauris non pellentesque accumsan. Nec
                        pellentesque eget.
                    </p>
                </div>
            </div>
        </section>
    )}
