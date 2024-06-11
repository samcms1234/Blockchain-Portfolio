import React, { useEffect, useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.png'
import './Hero.css'

import axios from 'axios'

const Hero = () => {
    const [modal, setModal] = useState(false);
    const [description,setDescription]=useState("");
    const [cid,setCid]=useState("");
    const BASE_URL = 'http://localhost:5000';
    useEffect(()=>{
      axios.get(BASE_URL+'/fetchprofile')
      .then(response => {
        setDescription(response.data.profile);
      })
      .catch(error => {
        console.log(error);
      })
    },[])
    useEffect(()=>{
        axios.get(BASE_URL+'/imagecid')
        .then(response => {
            setCid(response.data.imagecid);
        })
        .catch(error => {
            console.log(error);
        })
      },[])
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Saumya Srivastava </span>
                    is a Full-Stack Blockchain Developer From India.</p>
                <h1>I develop decentralised apps in web3 space.</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - samdevpro99@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://red-keen-chicken-777.mypinata.cloud/ipfs/${cid}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
