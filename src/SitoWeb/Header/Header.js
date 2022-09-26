import './Header.css';
import Button from '../Button/Button';
import Phone from '../assets/phone.png'; 
function Header(){

    return(
      <header>
    <div>
     <h1>We Create Powerful Digital <span>Products.</span></h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adiscing edit. Dolor
        morbi vedit turpis et dolor sit morbi odio id. Aliquam ultricies
        tortor ac.
      </p>
      <Button>Get Started</Button>
<img src={Phone} alt="cellulare" />
    
</div>
</header>
)}

export default Header;