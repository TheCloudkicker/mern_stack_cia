import React from 'react'
import { Button, Container, Jumbotron } from "react-bootstrap"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { LinkContainer } from "react-router-bootstrap"

const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Jumbotron>
            <h1 className="text-center">
              CIA File Redacter
            </h1>
            <p className="text-center">
              <LinkContainer to="/files">
                <Button variant="success" size="lg" >
                  Redacted Files
                </Button>
              </LinkContainer>
            </p>
          </Jumbotron>
        </Container>

      </main>

      <Footer />

    </Router>
  )
}

export default App
