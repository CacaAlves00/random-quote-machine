import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './styles.scss'

function index ({ author, content, onClickNewQuoteBtn }) {
    return (
        <Card id="quote-box">
            <Card.Body>
                <Card.Text id="text" className="text-primary">{content}</Card.Text>
                <Card.Subtitle id="author" className="blockquote-footer mb-5">{author}</Card.Subtitle>

                <footer>
                    <Button id="new-quote" variant="primary" onClick={onClickNewQuoteBtn}>New quote</Button>
                    <Card.Link id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">Tweet this</Card.Link>
                </footer>
            </Card.Body>
        </Card>
    )
}

export default index