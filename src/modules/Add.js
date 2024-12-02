// import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Add = ()=>{

    const [id , setId] = useState(0);
    const [name , setName] = useState("");
    const [genre , setGenre] = useState("");
    const [duration , setDuration] = useState("");
    const [rating , setRating] = useState(0.0);
    const [year, setYear] = useState(0);

    const [messageOfAdd, setMessageOfAdd] = useState("");

    const addMovie = async () => {
        fetch("http://localhost:8080/api/movies/addMovie", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                genre,
                duration,
                rating,
                year
            })
        })
        .then(async (res) => {
            // Check for response status
            if (!res.ok) {
                // Read error message from response body as text or JSON depending on how it is sent
                const errorData = await res.text();
                throw new Error(errorData || "An error occurred");
            }
            return res.json(); // Parse JSON response if request was successful
        })
        .then((data) => {
            clearForAdd();
            setMessageOfAdd(data.message || "Movie added successfully!");
        })
        .catch((error) => {
            setMessageOfAdd(error.message); // Display error message
        });
    };

    const updateMovie = async () => {
        fetch(`http://localhost:8080/api/movies/updateMovie/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                genre,
                duration,
                rating,
                year
            })
        })
        .then(async (res) => {
            // Check for response status
            if (!res.ok) {
                // Read error message from response body as text or JSON depending on how it is sent
                const errorData = await res.text();
                throw new Error(errorData || "An error occurred");
            }
            return res.json(); // Parse JSON response if request was successful
        })
        .then((data) => {
            clearForAdd();
            setMessageOfAdd(data.message || "Movie updated successfully!");
        })
        .catch((error) => {
            setMessageOfAdd(error.message); // Display error message
        });
    };

    const deleteMovie = async()=>{
        fetch(`http://localhost:8080/api/movies/deleteById/${id}`,{
            method:'DELETE'
        })
        .then(async (res) => {
            // Check for response status
            if (!res.ok && res.status !== 302) {
                // Read error message from response body as text or JSON depending on how it is sent
                const errorData = await res.text();
                throw new Error(errorData || "An error occurred");
            }
            return res.json(); // Parse JSON response if request was successful
        })
        .then((data) => {
            setMessageOfAdd("Movie Deleted successfully!");
        })
        .catch((error) => {
            setMessageOfAdd(error.message); // Display error message
        });
    }
    

    const clearForAdd = ()=>{
        setName("");
        setDuration("");
        setGenre("");
        setRating(0.0);
        setYear(0);
    }

    return (
        <div className="Add">
            <div className="add-content">
                <label for="name">Name</label>
                <input type="text" value={name} id="name" onChange={(event) =>setName(event.target.value)}/>
            </div>
            <div className="add-content">
                <label for="genre">Genre</label>
                <input type="text" value={genre} id="genre" onChange={(event)=>setGenre(event.target.value)}/>
            </div>
            <div className="add-content">
                <label for="duration">Duration</label>
                <input type="text" value={duration} id="duration" onChange={(event)=>setDuration(event.target.value)}/>
            </div>
            <div className="add-content">
                <label for="rating">Rating</label>
                <input type="number" value={rating} id="rating" onChange={(event)=>setRating(event.target.value)}/>
            </div>

            <div className="add-content">
                <label for="year">Year</label>
                <input type="number" value={year} id="year" onChange={(event)=>setYear(event.target.value)}/>
            </div>
            
            <div className="add-content">
                <button onClick={addMovie}>
                    Add Movie
                </button>
            </div>
            <div className="add-content">
                <input type="number" placeholder="id" onChange={(event)=>setId(event.target.value)}/>
            </div>
            <div className="add-content">
                <button onClick={updateMovie}>
                    update Movie
                </button>
                <button onClick={deleteMovie}>
                    Delete Movie
                </button>
            </div>

            <div className="add-content">
                {messageOfAdd && <h2>{messageOfAdd}</h2>}
            </div>
        </div>
    );
}