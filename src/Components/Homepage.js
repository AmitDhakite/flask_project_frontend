import React from 'react'
import {Navbar} from 'react-bootstrap'

const Homepage = () => {
    return (
        <>
            <Navbar bg = "primary" variant='dark' className='justify-content-center'>
                <Navbar.Brand>Python + React Project</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default Homepage;