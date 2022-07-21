import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import fetchRandomQuote from './api';
import './App.scss';
import QuoteBox from './components/QuoteBox'

function App() {
  const [quote, setQuote] = useState(null)


  useEffect(() => {
    fetchNewQuote()

  }, [])

  async function fetchNewQuote() {
    const apiResponse = await fetchRandomQuote()
    setQuote(apiResponse)
  }

  return (
    <div className="App d-flex flex-column align-items-center">
      {
        quote == null ?
          <Spinner className="mt-5" animation="border" variant="primary" /> :
          <>
            <h1>Random Quote Machine</h1>
            <QuoteBox onClickNewQuoteBtn={fetchNewQuote} author={quote.author} content={quote.content} />
          </>
      }
    </div>
  );
}

export default App;
