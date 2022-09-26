import './Portfolio.css';
import Button from '../Button/Button';
import {ReactComponent as SvgLeft} from '../assets/Vector (1).svg';
import {ReactComponent as SvgRight} from '../assets/Vector (2).svg';
import Slider from '../assets/slider01.png';


export default function Portfolio(){
    return(
<section id="portfolio">
<div className="slider">

    <button id="left">
<SvgLeft/>
 </button>
    <img src={Slider} alt="img01" />
    <button id="right">
<SvgRight />
</button>
</div>

<div className="text">
    <h1>Portfolio</h1>

    <hr />

    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Morbi risus duis nibh laoreet. Malesuada luctus tincidunt
        tortor consectetur netus facilisi dapibus laoreet orci.
        Viverra amet maecenas consectetur tincidunt felis, pretium
        posuere ut sapien. Cursus lacus vitae purus est viverra eu
        ornare tellus augue. Proin risus, sed diam ac. Aliquet.
    </p>

    <Button>View All</Button>
</div>
</section>
    )}
