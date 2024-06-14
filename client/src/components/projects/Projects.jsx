import React, { useEffect, useState} from 'react'
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
import "./Projects.css"
import axios from 'axios';

const Projects = ({state}) => {
    const [modal, setModal] = useState(false);
    const [projects,setProjects]=useState("");
    const BASE_URL = 'http://localhost:5000';
    useEffect(()=>{
        axios.get(BASE_URL+'/getallprojects')
        .then(response => {
            setProjects(response.data.projects)
        })
        .catch(error => {
            console.log(error);
        })
    },[])
    
    const donateEth=async(event)=>{
        event.preventDefault();
        try{
            const {contract,web3}=state;
            const eth = document.querySelector("#eth").value;
            const weiValue=web3.utils.toWei(eth,"ether");
            const accounts = await web3.eth.getAccounts();
            await contract.methods.donate().send({from:accounts[0],value:weiValue,gas:480000});
            alert("Transaction Succesful");
        }
    catch(error){
       alert("Transaction Not Succesful");
    }
}
    return (
        <section className="project-section">
            <h1 className="title">Projects </h1>
            {projects.length > 0 ? (
                projects.map((project) => {
                const githubLink = `https://github.com/samcms1234/${project.githubLink}`;
                return (
                    <div className="card-wrapper">
                    <a href={githubLink} className="project-card" target='_blank' rel="noopener noreferrer" key={project.githubLink}>
                        <div className="card-text">
                            <h3>{project.title}</h3>
                        </div>
                        <div className="card-img">
                            <img src={`https://red-keen-chicken-777.mypinata.cloud/ipfs/${project.images[0]}`} alt="" />
                        </div>
                        <div className="card-text">
                            <p>{project.description}</p>
                        </div>
                    </a>
                    </div>
                );
                })
                ) : (
                    <p className='no-projects'>No projects to display</p>
                )}
           
 {/*  =========popup bootstrap==========  */}

 <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalHeader toggle={() => setModal(!modal)}>
                            Enter the ETH you want to donate!
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={donateEth}>
                                <Row>
                                    <input id="eth" type="text" />
                                        <Button className='mt-4' >
                                            Send
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    {/*  =========popup bootstrap end==========  */}
                    <p className='donate' onClick={() => setModal(true)}>Liked the project's ? Consider donating Eth's <FaDonate className='icon' /></p>
        </section>
    )
}

export default Projects
