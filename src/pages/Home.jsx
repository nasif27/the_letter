import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Button, Form, Modal, Offcanvas } from "react-bootstrap";
import { useEffect, useState } from "react";
// import Image from '../pages/nature 4.jpg';
// import Image from '../../nature 4.jpg';
import Song from '../../public/Winter Sonata Piano 3.mp3';

export default function Home() {
    // const Image = 'https://www.pexels.com/photo/lake-and-mountain-417074/';
    // const Image = 'https://www.pexels.com/photo/clear-blue-shore-457881/';
    const pwd = import.meta.env.VITE_PWD;
    const [password, setPassword] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(true);
    // const [audio] = useState(new Audio('./src/pages/Winter Sonata Piano 3.mp3'));
    const [audio] = useState(new Audio(Song));
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    var i = 0;
    // var txt = `loremasacascascascasc\naedasdasdasda\nasdca`;
    var txt = import.meta.env.VITE_MYTEXT;
    var speed = 150;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    const playAudio = () => {
        audio.currentTime = 0;
        audio.play();
        setIsPlaying(true);
        setHasStarted(true);
    };

    const pauseAudio = () => {
        audio.pause();
        setIsPlaying(false);
    }

    const resumeAudio = () => {
        if (!isPlaying && hasStarted) {
            audio.play();
            setIsPlaying(true);
        }
    };

    // const handleShow = () => {
    //     setShow(true);
    // };

    const handleClose = () => {
        setShow(false);
        playAudio();
        // audio.play();
        typeWriter();
    };

    const handleShowModal = () => {
        setModalShow(true);
    };

    const handleCloseModal = () => {
        setModalShow(false);
    }

    const verifyPassword = () => {
        if (password === pwd) {
            handleCloseModal();
            handleClose();
        } else {
            handleCloseModal();
            alert('wrong password');
        }
    }

    useEffect(() => {
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audio]);


    return (
        <>
            <Offcanvas 
                show={show}
                style={{backgroundColor: '#22303C', overflow: 'hidden'}} 
                // onHide={handleShowModal} 
                className={'w-50 d-flex flex-row justify-content-end align-items-center'}
            >
                <div className="container">
                    <div className={"circle"} onClick={handleShowModal}>
                        <span style={{'--i':0}}></span>
                        <span style={{'--i':1}}></span>
                        <span style={{'--i':2}}></span>
                        <span style={{'--i':3}}></span>
                    </div>
                </div>
            </Offcanvas>

            <Offcanvas 
                show={show}
                style={{backgroundColor: '#22303C', overflow: 'hidden'}} 
                // onHide={handleShowModal} 
                className={'w-50 d-flex flex-row justify-content-start align-items-center'} 
                placement="end"
            > 
                <div className="container2">
                    <div className={"circle2"} onClick={handleShowModal}>
                        <span style={{'--i':0}}></span>
                        <span style={{'--i':1}}></span>
                        <span style={{'--i':2}}></span>
                        <span style={{'--i':3}}></span>
                    </div>
                </div>
            </Offcanvas>

            <Modal
                show={modalShow === true}
                onHide={handleCloseModal}
                animation={true}
                centered
            >
                <Modal.Header closeButton>
                    <h4>Password Required</h4>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                // value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={verifyPassword}>OK</Button>
                </Modal.Footer>
            </Modal>
            
            <div
                // style={{backgroundImage: Image, backgroundSize: 'auto'}}
                className={`mb-5 d-flex flex-column justify-content-center align-items-center mt-5 text-center text-dark`}
            >
                <Button
                    variant="success"
                    className="mb-3"
                    style={{borderRadius: '50%', paddingLeft: 10, paddingRight: 10}} 
                    onClick={isPlaying === false ? resumeAudio : pauseAudio}
                >
                    {/* {isPlaying === false ? 'Resume' : 'Pause'} */}
                    {isPlaying === true ? <i className="bi bi-volume-up-fill"></i> : <i className="bi bi-volume-mute-fill m-0 p-0"></i>}
                </Button>

                <pre 
                    id="demo" 
                    style={{
                        // width: '90%',
                        textAlign: 'justify', 
                        color: 'white', 
                        fontSize: '19px', 
                        fontFamily: 'sans-serif', 
                        WebkitTextStroke: '1px black'
                    }}
                ></pre>
            </div>
        </>
    );
}