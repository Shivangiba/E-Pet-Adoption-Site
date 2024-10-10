import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetAllPets() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = "http://localhost:5000/pets";
        fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    const formattedPets = data.map((pet) => {
        return (
            <div className="card" style={{ width: "18rem" }} key={pet.id}>
                <img src={pet.image} className="card-img-top" alt={pet.PetName} />
                <div className="card-body">
                    <h5 className="card-title">{pet.PetName}</h5>
                    <h6>ID: {pet.petid}</h6>
                    <Link className="btn btn-info" to={`/pets/${pet.petid}`}>
                        Read More
                    </Link>
                    <Link className="btn btn-warning ml-2" to={`/edit/${pet.petid}`}>
                        Edit
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <>
            <Link to="/Add" className="btn btn-primary mb-3">
                Add Pet
            </Link>
            <div className="d-flex flex-wrap">
                {formattedPets}
            </div>
        </>
    );
}

export default GetAllPets;


