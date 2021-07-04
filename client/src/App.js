import React from 'react'
import { Button, Container, Jumbotron, Form } from "react-bootstrap"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import UploadForm from "./components/UploadForm"
import { LinkContainer } from "react-router-bootstrap"

const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <UploadForm />

        </Container>

      </main>

      <Footer />

    </Router>
  )
}

export default App
