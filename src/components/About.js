import React from 'react';

const About = ({ info }) => {
    return (
        <div>
            <h2>About Component</h2>
            <p>Title: {info.title}</p>
            <p>Body: {info.body}</p>
        </div>
    );
}

export default About;
