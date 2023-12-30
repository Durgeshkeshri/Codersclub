import React, { useRef } from 'react';
const Form = () => {
    const fullnameRef = useRef();
    const courseRef = useRef();
    const yearRef = useRef();
    const divisionRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            fullname: fullnameRef.current.value,
            course: courseRef.current.value,
            year: yearRef.current.value,
            division: divisionRef.current.value,
        };

        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form data sent successfully');

                fullnameRef.current.value = '';
                courseRef.current.value = '';
                yearRef.current.value = '1'; // Set the default year value to '1'
                divisionRef.current.value = '';

                // You can add additional logic here, such as showing a success message
            } else {

                fullnameRef.current.value = '';
                courseRef.current.value = '';
                yearRef.current.value = '1'; // Set the default year value to '1'
                divisionRef.current.value = '';

                console.error('Error sending form data');
            }
        } catch (error) {
            console.error('Error sending form data:', error);
            
            fullnameRef.current.value = '';
            courseRef.current.value = '';
            yearRef.current.value = '1'; // Set the default year value to '1'
            divisionRef.current.value = '';
        }
    };

    return (
        <div className="App">
            <h1>React Form with Node.js + Express Backend</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input type="text" ref={fullnameRef} required />
                </label>
                <br />
                <label>
                    Course:
                    <input type="text" ref={courseRef} required />
                </label>
                <br />
                <label>
                    Year:
                    <select ref={yearRef} required>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                    </select>
                </label>
                <br />
                <label>
                    Division:
                    <input type="text" ref={divisionRef} required />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
