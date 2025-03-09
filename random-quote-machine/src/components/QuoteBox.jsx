import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { setQuote } from '../store/quoteSlice';

const QuoteBox = () => {
    const dispatch = useDispatch();
    const { quote, author} = useSelector((state) => state.quotes);

    const fetchQuote = async () => {
        const res = await fetch('https://dummyjson.com/quotes/random');
        const data = await res.json();
        dispatch(setQuote({
            quote: data.quote,
            author: data.author
        }));
    };

    useEffect(() => {
        fetchQuote();
    }, []);

  return (
    <div id='quote-box' className='quote-box'>
      <p id='text'>{quote}</p>
      <h5 id='author'>-{author}</h5>

      <div className='buttons'>
        <button id='new-quote' onClick={fetchQuote}>New Quote</button>
        <a 
          id='tweet-quote'
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
          target='_blank'
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
        
    </div>
  )
}

export default QuoteBox;