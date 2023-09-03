/*import React, { useState } from 'react';

const CreateUser: React.FC = () => {
    const [id, setID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = () => {
        const User = {
            id,
            firstName,
            lastName,
            email,
            password,
            role,
        };

        // TODO: Make an API call to create the user using userData
        // For example, using fetch or an HTTP client library
    };

    return (
        <div>
            <h2>Create User</h2>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Role:</label>
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />

                <button onClick={handleSubmit}>Create User</button>
            </div>
        </div>
    );
};

export default CreateUser;*/
import React, { useState } from 'react';

const CreateUser: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = () => {
        const user = {
            firstName,
            lastName,
            email,
            password,
            role,
        };

        // TODO: Make an API call to create the user using the user data
        // For example, using fetch or an HTTP client library
        console.log('Creating user:', user);

        // Clear input fields after submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setRole('');
    };

    return (
        <div>
            <h2>Create User</h2>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Role:</label>
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />

                <button onClick={handleSubmit}>Create User</button>
            </div>
        </div>
    );
};

export default CreateUser;

