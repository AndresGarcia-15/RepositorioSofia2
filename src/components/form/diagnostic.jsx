import Modal from "react-modal";
import { useState } from "react";
import "./diagnostic.css";
Modal.setAppElement("#root");

export const Diagnostic = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleform = () =>{
        setIsOpen(!isOpen);
    }
    
    return (
        <div>
            <button className="add-buton" onClick={toggleform}>DIAGNOSES</button>
            <Modal isOpen={isOpen} onRequestClose={toggleform} contentLabel="ExampleModal" className="form-content">
                <form className="form">
                <h1 className="title">File upload</h1>
                    <label className='form-child'>Name file</label>
                    <input type='text'  className='form-child'></input>
                    <label className='form-child'>Test type</label>
                    <input type='text' className='form-child'></input>
                    <label className='form-child'>Patient ID</label>
                    <input type='number' required className='form-child'></input>
                    <label className='form-child'>Date</label>
                    <input type='date' required className='form-child'></input>
                    <label>Choose file</label>
                    <input type='file' required className='form-child'></input>
                    <button className="Send" type="submit">Upload</button>
                    </form>
            </Modal>
        </div>
    );
}

export default Diagnostic;
