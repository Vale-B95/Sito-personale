import './FormContactUs.css';
import Input from './Input/Input';


export default function FormContactUs(){
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("hai invitato il messaggio correttamente");
    }



    return(
        <section id="contact">
            <h2>Contact Us</h2>
    <div className='underline'>
        <form method="post" id="form" onSubmit={handleSubmit}>
            <div className="bloccoInput">
            <Input type="email" value="" etichetta="Email" id="email">Email</Input>
            <Input type="textarea" value="" etichetta="Enter" id="message" rows="5" >Enter Message</Input>
            </div>
            <div className='bloccoInput'>
            <Input type="tel" value="" etichetta="Phone" id="phone">Enter a phone numbers</Input>
            <Input type="title" value="" etichetta="Title" id="title">Title</Input>
            <div>
            <Input type="submit" value="" etichetta=" " id="submit">Submit</Input>
            <Input type="reset" value="" etichetta=" " id="reset">Reset</Input>
            </div>
        </div>
        </form>
    </div>
    </section>

    )
}