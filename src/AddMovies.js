//AddMovie.js
import React, { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import Badge from 'react-bootstrap/Badge';


function AddMovies({ addMovie }) {
    const [show, setShow] = useState(false);

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const [posterURL, setPosterURL] = useState("");

    /* 2 function for open/close the add movie modal */
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /* a function Save Movie */
    const handleclic = () => {
        addMovie({ title, description, posterURL, rating });
        handleClose();
    };
    return (
        <>
            {/*  button Add */}
        
            <button class="custom-btn btn-3"  startIcon={<AddIcon/>} onClick={handleShow}><span>Add Movie</span></button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movies</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextTitle">
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Title"
                                    name="title"
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPosterURL">
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Path"
                                    name="posterURL"
                                    required
                                    onChange={(e) => setPosterURL(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextDescription">
                            <Col sm="10">
                                <Form.Control as="textarea" rows={3} placeholder="Description"
                                    name="description"
                                    required
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextRating">
                            <Form.Label column sm="4">
                                Rate
                            </Form.Label>
                            <Col sm="8">
                                <Badge bg="secondary">
                                    <Rating
                                        name="half-rating"
                                        value={rating}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            setRating(newValue);
                                        }}
                                    />
                                </Badge>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button class="custom-btn btn-14" variant="contained" color="success" startIcon={<SaveIcon/>} onClick={handleclic}>
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddMovies;
