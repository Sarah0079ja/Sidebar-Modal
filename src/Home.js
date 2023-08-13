import React from 'react'
import Nav from './Nav'
import Modal from './Modal'

const Home = () => {
  return (
    <main>
      <Nav />
      <div className="flex items-center justify-center h-screen">
        <Modal />
      </div>
    </main>
  );
}

export default Home