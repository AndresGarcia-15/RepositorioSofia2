import Modal from "react-modal";
import { useState } from "react";
import "./formulariocita.css";
Modal.setAppElement("#root");

export const Formulariocita = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleform = () =>{
        setIsOpen(!isOpen);
    };
    return (
    <div> 
        <button className="add-buton" onClick={toggleform}>APPOINTMENTS</button>
            <Modal isOpen={isOpen} onRequestClose={toggleform} contentLabel="ExampleModal" className="form-content">
                <form className="form">
                <h1 className="title">Schedule an appointmets</h1>
                    <label className='form-child'>Date</label>
                    <input type='date' required className='form-child'></input>
                    <label className='form-child'>Time</label>
                    <input type='time' required className='form-child'></input>
                    <label className='form-child'>Doctor</label>
                    <input type='text' required className='form-child'></input>
                    <label className='form-child'>Description</label>
                    <textarea type='text' placeholder="Description" className='text-area'>Description</textarea>
                    <button className="Send" type="submit">Send</button>
                    </form>
            </Modal>
            </div>
                    );
    };


export default Formulariocita;
