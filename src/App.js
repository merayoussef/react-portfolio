import React, { useState } from 'react';
import Nav from './component/Nav';
import About from './component/About';
import ContactForm from './component/Contact';
import Portfolio from './component/Work';
import coverImage from '../src/assets/img/BG-image.jpg'


function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: "photos and project links to my work",
    }   
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <img src={coverImage} className="" style={{ width: "100%", maxHeight: "350px" }} alt="cover" />
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;

