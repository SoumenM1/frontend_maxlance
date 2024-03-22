import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [user, setUser] = useState({});
    const history = useNavigate();
    const token = localStorage.getItem('token');

    // Fetch user details and items from the backend when the component mounts
 useEffect(() => {
    const fetchData = async () => {
        await fetchUserDetails();
        await fetchItems();
    };
    fetchData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


    // Function to fetch user details from the backend
    const fetchUserDetails = async () => {
        try {
            const response = await fetch('http://localhost:4000/user/details', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    // Function to fetch items from the backend
    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:4000/items', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setItems(data.items);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    // Function to handle item creation
    const handleCreateItem = async () => {
        try {
            const response = await fetch('http://localhost:4000/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: itemName,
                    description: itemDescription
                })
            });
            if (response.ok) {
                fetchItems(); // Refresh items list
                setItemName('');
                setItemDescription('');
            } else {
                console.error('Error creating item:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    // Function to handle item update
    const handleUpdateItem = async (itemId, updatedName, updatedDescription) => {
        try {
            const response = await fetch(`http://localhost:4000/items/${itemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: updatedName,
                    description: updatedDescription
                })
            });
            if (response.ok) {
                fetchItems(); // Refresh items list
            } else {
                console.error('Error updating item:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    // Function to handle item deletion
    const handleDeleteItem = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:4000/items/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            if (response.ok) {
                fetchItems(); // Refresh items list
            } else {
                console.error('Error deleting item:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav>
                <div>
                    <img src={user.imgUrl} alt="User Logo" />
                    <span>{user.name}</span>
                </div>
                <button onClick={() => history('/login')}>Logout</button>
            </nav>

            {/* Items */}
            <div>
                <h1>Items</h1>
                <ul>
                {items?.map(item => (
                  <li key={item.id}>
                        <div>
                        <strong>{item?.name ?? 'Name not available'}</strong>
                            <p>{item?.description ?? 'Description not available'}</p>
                         <button onClick={() => handleDeleteItem(item?.id)}>Delete</button>
                        <button onClick={() => handleUpdateItem(item?.id, prompt('Enter updated name', item?.name), prompt('Enter updated description', item?.description))}>Update</button>
                               </div>
                            </li>
                          ))}

                </ul>
            </div>

            {/* Create New Item */}
            <div>
                <h2>Create New Item</h2>
                <input type="text" placeholder="Name" value={itemName} onChange={e => setItemName(e.target.value)} />
                <input type="text" placeholder="Description" value={itemDescription} onChange={e => setItemDescription(e.target.value)} />
                <button onClick={handleCreateItem}>Create Item</button>
            </div>
        </div>
    );
}

export default HomePage;
