import React, { useState, useRef } from 'react'
import { Button, Form, Spinner, Row, Col, Alert } from "react-bootstrap"
import { validateString } from './validateInputs'
import { procFile } from './procFile'

import { saveFileToServer } from '../store/actions/files'
import { useSelector, useDispatch } from 'react-redux'


const UploadForm = () => {
    const inputRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [validating, setValidating] = useState(false)
    const [fileError, isFileError] = useState(false)
    const [stringError, isStringError] = useState(false)

    const [validated, setValidated] = useState(false)
    const [inputString, setInputString] = useState('')
    const [file, setFile] = useState(null)
    const [params, setParams] = useState([])

    const [processedFile, setProcessedFile] = useState({
        isProcessed: false,
        newtext: ''
    })

    const reset = () => {
        inputRef.current.value = null
        setFile(null)
        setParams([])
        setInputString('')
        setValidated(false)
        setLoading(false)
        setValidating(false)
        isStringError(false)
    }


    const handleStringChange = e => {
        setInputString(e.target.value)
    }

    const handleFileChange = e => {

        if (e.target.files) {
            let name = e.target.files[0].name

            if (name.endsWith('.txt')) {
                setFile(e.target.files[0])
                return
            } else {
                e.target.value = null
                isFileError(true)
                setTimeout(() => {
                    isFileError(false)
                }, 2000)
            }
        }


    }

    const validateInput = async () => {

        setValidating(true)
        const res = await validateString(inputString)

        setValidating(false)

        if (res.status) {
            setValidated(true)
            setParams(res.parsedArray)

        } else {
            isStringError(true)
            setTimeout(() => {
                isStringError(false)
            }, 2000)
        }
    }


    const renderParsed = () => {
        if (!validated) return null

        return (
            <>
                <Row className="align-items-center">
                    <Form.Label>Validated parameters</Form.Label>
                </Row>
                {params.map(param =>
                    <Row className="align-items-center">
                        <Form.Label>{param}</Form.Label>
                    </Row>
                )}
            </>
        )
    }

    const startProc = async () => {
        setLoading(true)

        const res = await procFile(file, params)

        setProcessedFile({
            isProcessed: true,
            newtext: res.newtext
        })


        setLoading(false)


    }

    const dispatch = useDispatch()

    const save = () => {

        dispatch(saveFileToServer({
            fileText: processedFile.newtext,
            user: 'batman',
            fileName: file.name,
            params: params
        }))

    }


    return (
        <>
            <Form.Label>Select file</Form.Label>
            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control ref={inputRef} type="file" size="lg" disabled={loading} onChange={handleFileChange} />
            </Form.Group>
            {fileError ? <Alert variant={'danger'}> File must have <strong>.txt</strong> extension</Alert> : null}

            <Row className="align-items-center">
                <Form.Label>Terms to redact </Form.Label>

            </Row>


            <Row className="align-items-center">
                <Col sm={9} className="my-1">
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control type="text" placeholder="Enter text to redact" disabled={loading || validating} value={inputString} onChange={handleStringChange} />

                    </Form.Group>
                </Col>

                <Col sm={3}>
                    <Button variant="primary" type="submit" disabled={!file || !inputString || loading || validating} onClick={() => validateInput()}>Validate</Button>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Form.Text className="text-muted">
                    String of keywords and phrases: a string of censored keywords and phrases separated by spaces or
                    commas. Phrases must enclosed in single or double quotes.
                </Form.Text>

            </Row>
            {stringError ? <Alert variant={'danger'}>Input not formatted correctly</Alert> : null}

            {renderParsed()}

            {!loading ?
                <Button variant="primary" type="submit" disabled={!validated} onClick={() => startProc()}>Process File</Button>
                :
                <Spinner animation="border" />
            }

            <Button variant="primary" className="mx-2" type="submit" disabled={!processedFile.isProcessed} onClick={() => save()}>Save to DB</Button>
            <Button variant="secondary" type="submit" onClick={() => reset()}>Reset Form</Button>



        </>
    )
}

export default UploadForm
