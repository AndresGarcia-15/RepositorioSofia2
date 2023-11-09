import Modal from "react-modal";
import { useState } from "react";
import "./formulariocita.css";
Modal.setAppElement("#root");

export const Formulariocita = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        doctor: "",
        prescription: "",
    });

    const toggleform = () => {
        setIsOpen(!isOpen);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
           
            const appointmentData = {
                date: formData.date,
                time: formData.time,
                doctor: formData.doctor,
                prescription: formData.prescription,
            };

           
            const response = await fetch("https://api-healtcare.onrender.com/appointment/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(appointmentData),
            });

            if (response.ok) {
               
                console.log("Cita creada exitosamente");
                toggleform(); 
            } else {
                console.error("Error al crear la cita");
            }
        } catch (error) {
            console.error("Error al procesar la solicitud: ", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <button className="add-buton" onClick={toggleform}>
                APPOINTMENTS
            </button>
            <Modal isOpen={isOpen} onRequestClose={toggleform} contentLabel="ExampleModal" className="form-content">
                <form className="form" onSubmit={handleFormSubmit}>
                    <h1 className="title">Schedule an appointment</h1>
                    <label className="form-child">Date</label>
                    <input type="date" name="date" required className="form-child" onChange={handleInputChange} value={formData.date} />
                    <label className="form-child">Time</label>
                    <input type="time" name="time" required className="form-child" onChange={handleInputChange} value={formData.time} />
                    <label className="form-child">Doctor</label>
                    <input type="text" name="doctor" required className="form-child" onChange={handleInputChange} value={formData.doctor} />
                    <label className="form-child">Prescription</label>
                    <textarea name="prescription" placeholder="Prescription" className="text-area" onChange={handleInputChange} value={formData.prescription} />
                    <button className="Send" type="submit">
                        Send
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default Formulariocita;

