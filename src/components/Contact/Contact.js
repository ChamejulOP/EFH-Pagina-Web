import {useState} from "react"
export const Contact = () =>{
    const InitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const[ButtonText, setButtonText] = useState('send');
    const[status, setStatus] = useState({});   
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails, [category]:value
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json;charset=utf=8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200){
            setStatus({success: true, message: 'Message sent succesfully'});
        } else{
            setStatus({success: false, message: 'Something went wrong, please try again later'})
        }
    };
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contactanos"/>
                    </Col>
                    <Col md={6}>
                        <h2>Comunicate con nosotros</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type='text' value={formDetails.firstName} placeholder="Nombre" onChange={(e)=> onFormUpdate('firstName', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type='text' value={formDetails.lastName} placeholder="Apellido" onChange={(e)=> onFormUpdate('lastName', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type='email' value={formDetails.email} placeholder="Correo" onChange={(e)=> onFormUpdate('email', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type='tel' value={formDetails.phone} placeholder="Teléfono" onChange={(e)=> onFormUpdate('phone', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Mensaje" onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}