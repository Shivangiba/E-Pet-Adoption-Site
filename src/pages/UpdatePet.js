import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePet(){
    const [data,setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        const apiUrl ="http://localhost:5000/pets/update"+id;
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])

    return(
    <>
    <div className="form-group row">
        <label for="text3" class="col-4 col-form-label">Enter PetID</label> 
        <div className="col-8">
        <input value={data.PetID} onChange={(e)=>{
            setData({...data,PetID: e.target.value})
        }} type="text" className="form-control" />
        </div>
    </div>
    <div className="form-group row">
        <label for="text1" className="col-4 col-form-label">Enter PetName</label> 
        <div className="col-8">
        <input value={data.PetName} onChange={(e)=>{
            setData({...data,PetName:e.target.value})
        }} type="text" className="form-control" />
        </div>
    </div>
    <div className="form-group row">
        <label for="text" className="col-4 col-form-label">Enter Pet Image</label> 
        <div className="col-8">
        <input value={data.PetImage} onChange={(e)=>{
            setData({...data,PetImage:e.target.value})
        }} type="text" classNames="form-control" />
        </div>
    </div>
    <div className="form-group row">
        <label for="text2" className="col-4 col-form-label">Enter Pet Catagory</label> 
        <div className="col-8">
        <input value={data.Catagory} onChange={(e)=>{
            setData({...data,Catagory:e.target.value})
        }} type="text" className="form-control"/>
        </div>
    </div>
    <div className="form-group row">
        <label for="text4" className="col-4 col-form-label">Enter Pet Species</label> 
        <div className="col-8">
        <input value={data.Species} onChange={(e)=>{
            setData({...data,Species:e.target.value})
        }} type="text" className="form-control" />
        </div>
    </div> 
    <div className="form-group row">
        <label for="text4" className="col-4 col-form-label">Enter Pet Age</label> 
        <div className="col-8">
        <input value={data.Species} onChange={(e)=>{
            setData({...data,Species:e.target.value})
        }} type="text" className="form-control" />
        </div>
    </div> 
    <div class="form-group row">
        <label for="text4" className="col-4 col-form-label">Availibility</label> 
        <div className="col-8">
        <input value={data.Availibility} onChange={(e)=>{
            setData({...data,Availibility:e.target.value})
        }} type="text" className="form-control" />
        </div>
    </div> 





    <div className="form-group row">
        <div className="offset-4 col-8">
        <button onClick={()=>{

            const apiUrl = "http://localhost:5000/pets/update/"+id;
            fetch(apiUrl,{
                method:"PUT",
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(res=>res.json())
            .then(res=>{
                navigate("/pets")
            });
        }} className="btn btn-primary">Edit</button>
        </div>
    </div>
    
    </>
    );
}

export default UpdatePet;