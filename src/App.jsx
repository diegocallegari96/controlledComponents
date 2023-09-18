import React, {useState} from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        naam: "",
        leeftijd: "",
        opmerkingen: "",
        nieuwsbrief: false,
    });

    function handleSubmit(e) {
        e.preventDefault();

        console.log({formData});
    }
    function handleInputChange(e) {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    }
    return (
        <div>
            <label htmlFor="details">
                <h4>Gegevens</h4>
            <form id="details">
                Naam:
                <input
                    type="text"
                    name="naam"
                    value={formData.naam}
                    onChange={handleInputChange}
                />
                <br/>
                Leeftijd:
                <input
                    type="number"
                    name="leeftijd"
                    value={formData.leeftijd}
                    onChange={handleInputChange}
                />
            </form>
            </label>
            <label htmlFor="review">
                <h4>Jouw review</h4>
                <form id="review" onSubmit={handleSubmit}>
                    Opmerkingen:
                    <br/>
                    <textarea
                        rows="4"
                        cols="50"
                        name="opmerkingen"
                        value={formData.opmerkingen}
                        onChange={handleInputChange}
                    />
                    <br/>
                    <input
                        type="checkbox"
                        name="nieuwsbrief"
                        value={formData.nieuwsbrief}
                        onChange={handleInputChange}
                    /> Ik schrijf me in voor de nieuwsbrief
                    <br/>
                    <button
                        type="submit">
                        versturen
                    </button>
                </form>
            </label>
        </div>
    );
}

export default App;
