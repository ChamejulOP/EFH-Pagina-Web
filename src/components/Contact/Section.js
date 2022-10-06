import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"

export const Csection = () =>{
    return(
        <Container>
            <MailchimpForm/>
            <Row>
                <Col sm={6} className="text-center text-sm-end">
                </Col>
            </Row>
        </Container>   
    )
}