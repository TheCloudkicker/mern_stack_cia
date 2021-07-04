import React, { useState } from 'react'
import { Button, Form, Spinner } from "react-bootstrap"


const UploadForm = () => {
    const [loading, setLoading] = useState(false)
    const [inputString, setInputString] = useState('')

    const handleChange = e => {
        setInputString(e.target.value)
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>Select .txt file to redact</Form.Label>
                <Form.File id="exampleFormControlFile1" disabled={loading} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Terms to redact</Form.Label>
                <Form.Control type="text" placeholder="Enter text to redact" disabled={loading} value={inputString} onChange={handleChange} />
                <Form.Text className="text-muted">
                    String of keywords and phrases: a string of censored keywords and phrases separated by spaces or
                    commas. Phrases must enclosed in single or double quotes.
                </Form.Text>
            </Form.Group>

            {loading ?
                <Spinner animation="border" />
                :
                <Button variant="primary" type="submit" onClick={() => setLoading(!loading)}>Submit</Button>
            }

        </Form>
    )
}

export default UploadForm
