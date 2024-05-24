import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5053/api/Blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Blogs</h1>
                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.content}</p>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;
