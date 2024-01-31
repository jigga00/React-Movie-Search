import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  

  useEffect(() => {
    // func to fetch a movie by the id
    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:4000/api/movies/${params.id}`);
            const data = await res.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
