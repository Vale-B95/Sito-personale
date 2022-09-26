import './Portfolio.css';
import Button from '../Button/Button';

export default function Portfolio(){
    return(
<section id="portfolio">
<div className="slider">
    <Button id="left">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
    </Button>
    <img src="./assets/slider01.png" alt="img01" />
    <Button id="right">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
    </Button>
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

    <Button></Button>
</div>
</section>
    )}
