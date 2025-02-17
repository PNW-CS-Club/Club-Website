import React, { useState } from 'react';
import http from '../http-common';

export default function Blog() {
    //The homepage of the PNW CS Club website

    
        
        const [title, setTitle] = useState('');
        const [author, setAuthor] = useState('');
        const [text, setText] = useState('');
        const [message, setMsg] = useState('');

    const currentDate = new Date().toISOString();

        const do_submit = async(e) => {
            e.preventDefault();
            const cur_date = new Date().toISOString();

            const post_data = {
                title, author, text, date: cur_date,
            };

            console.log("Data being sent:", post_data); // temp log

            try {
                const response = await http.post("/uploadBlog", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(post_data),
                });

                if (!response.ok){
                    const err = await response.json();
                    throw new Error(err.message);
                }

                setMsg('Blog post created');
                setTitle('');
                setAuthor('');
                setText('');
            } catch (err) {
                setMsg(`Bro hasnt even built this yet : ${err.message}`);
                console.error(`Error making blog post`, err);  // will throw err for now
            }
        };

    return (
        <form onSubmit={do_submit}>
          <label htmlFor="title">Title:</label><br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          /><br /><br />
    
          <label htmlFor="author">Author:</label><br />
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          /><br /><br />
    
          <label htmlFor="text">Text:</label><br />
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          /><br /><br />
    
          <button type="submit">Create Post</button>
    
          {message && <p>{message}</p>}
        </form>
        );
    }