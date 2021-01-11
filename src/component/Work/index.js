import React from 'react';

function Portfolio() {
    return (
        <section id="portfolio" >
            <h2>Portfolio </h2>
            <div class="work-grid-container">
                <a href="https://random-group-name.github.io/SubMyFood/" class="Sub-My-Food grid-item">
                    <div>
                        <h3>Sub My Food</h3>
                        <span>HTML/CSS/JavaScript/APIs</span>
                    </div>
                </a>

                <a href="https://merayoussef.github.io/Project-Run-Buddy/" class="Run-Buddy grid-item">
                    <div>
                        <h3>Run Buddy</h3>
                        <span>HTML/CSS</span>
                    </div>
                </a>

                <a href="https://merayoussef.github.io/Project-Horiseon/" class="Horiseon grid-item">
                    <div>
                        <h3>Horiseon</h3>
                        <span>HTML/CSS</span>
                    </div>
                </a>

                <a href="https://sma-to-success.herokuapp.com/" class="Winter-Wishlist grid-item">
                    <div>
                        <h3>Winter Wishlist</h3>
                        <span>Handlebars/JavaScript/Node</span>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Portfolio;