import React from 'react'
import styles from './Quotes.module.css'
import { useNavigate } from 'react-router-dom';

const Quotes = (props) => {

    const navigate = useNavigate();

    const showQuoteHandler = (id) => {
        navigate(`/quotes/${id}`);
    }


  return (
    <li className={styles.quote}>
        <p>{props.text}</p>
        <p>{props.author}</p>
        <button onClick={() =>showQuoteHandler(props.id)}>View Full Screen</button>
    </li>
  )
}

export default Quotes