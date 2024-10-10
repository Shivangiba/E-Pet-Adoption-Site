import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPet() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    return (
        <>
            <div className="form-group row">
                <label for="text3" className="col-4 col-form-label">Enter PetID</label>
                <div className="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, PetID: e.target.value })
                    }} type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label for="text1" className="col-4 col-form-label">Enter PetName</label>
                <div className="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, Name: e.target.value })
                    }} type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label for="text" className="col-4 col-form-label">Enter  PetImage</label>
                <div className="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, Image: e.target.value })
                    }} type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label for="text2" className="col-4 col-form-label">Enter Pet Catagory</label>
                <div className="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, Catagory: e.target.value })
                    }} type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label for="text4" className="col-4 col-form-label">Enter PetAge</label>
                <div className="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, Age: e.target.value })
                    }} type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label for="text4" className="col-4 col-form-label">Enter Species</label>
                <div className="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, Species: e.target.value })
                    }} type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label for="text4" className="col-4 col-form-label">Availibility</label>
                <div className="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, Availibility: e.target.value })
                    }} type="text" className="form-control" />
                </div>
            </div>








     

            <div className="form-group row">
                <div className="offset-4 col-8">
                    <button onClick={() => {
                        const apiUrl = "http://localhost:5000/pets/add";
                        fetch(apiUrl, {
                            method: "POST",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(res => {
                                navigate("/pets")
                            });
                    }} className="btn btn-primary">Add</button>
                </div>
            </div>

        </>
    );

}


export default AddPet;