import React from 'react';
import coverImage from '../../assets/cover/BG-image.jpg'
function About() {

    return (
        <section className="my-5" >
        <h1 id="about">About Me</h1>
        <img src={coverImage} className="hero"  alt="cover" />
        <div className="my-2">
                <p>
                Graduate from Vanderbilt Coding Bootcamp. Highly motivated individual with a positive attitude.
                
                </p>
            </div>
        </section>
    )
}
export default About;