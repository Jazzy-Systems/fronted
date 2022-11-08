import React from 'react';
import { useEffect, useState } from 'react';
import ButtonGreen from './ButtonGreen';
import '../styles/editPersonCard.css';
import authHeader from '../services/auth-header';
import PersonService from '../services/person-service';
import PackService from '../services/pack-service';

const EditPackage = (props) => {
    
    let observationPack = ""
    const [apartment, setApartment] = useState("");
    const [apartments, setApartments] = useState(null);
    const [packageUnit, setpackageUnit] = useState("");
    const [packages, setPackages] = useState({});
    const [observation, setObservation] = useState(observationPack);

    

    const API_URL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        }
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    API_URL + "/api/v1/apartment/all", requestOptions
                )
            ).json();
            setApartments(data);
        };
        dataFetch();
    }, [API_URL]);

    const handleOnchange = (e) =>{

        setpackageUnit(e.target.value)
        setObservation(findDataPackage(e.target.value,"observation"))
        console.log(observation)
    }

    const handleFindByApartment = (e) => {
        e.preventDefault();
        PackService.findByApartment(findIdApartment(apartment)).then(
            (response) => {
                setPackages(response.data);
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                alert(resMessage + "error");
            }
        );
    }

    const findIdApartment = (apartamento) => {
        for (let i = 0; i < apartments.length; i++) {
            if ((apartments[i].buildingName + "-" + apartments[i].apartmentNumber) === apartamento) {
                return apartments[i].apartmentId
            }
        }
    }
    const findDataPackage = (pack,data) => {
        for (let i = 0; i < packages.length; i++) {
            if ((packages[i].messengerName+ "-" +packages[i].typePack) === pack) {
                if(data === "observation"){
                    observationPack = packages[i].observation 
                    return packages[i].observation
                }
                if(data === "id"){
                    return packages[i].packId
                }
            }
        }
    }
    const showContentPackage = () => {
        if (Object.keys(packages).length > 0) {
            return <form className='form-edit-pack' onSubmit={handleUpdatePackage}>
            <div className="col-md-15">
                <label htmlFor="selector" className="form-label">Paquete</label>
                <select name="packName" required className="form-select" id="rol-selector" value={packageUnit} onChange={handleOnchange}>
                    <option></option>
                    {packages.map((packageUnit) => (
                        <option value={packageUnit.messengerName+ "-" +packageUnit.typePack}>
                            {packageUnit.messengerName+ "-" +packageUnit.typePack}
                        </option>
                    ))}
                </select>
                <div className="invalid-feedback">
                    Seleccione un paquete por favor.
                </div>
                <div className="form-floating" id="input-packDescripcion">
                    <textarea type="text" name="observation" className="form-control" id="packFloatingDescripcion" placeholder="descripcion" value={observation} onChange={(e) => setObservation(e.target.value)} required></textarea>
                    <label className="form-label" htmlFor="floatingInput">Observacion</label>
                </div>
            </div>
            <ButtonGreen id="submit-button" text="Actualizar paquete" type="Submit" />
        </form>

        }

    }
    const handleUpdatePackage = (e) => {
        e.preventDefault();
        PackService.update(
            findDataPackage(packageUnit,"id"),
            observation
        ).then(
            response => {
                alert("Se ha actualizado el paquete satisfactoriamente")
                window.location.reload(true);
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                alert("Ha ocurrido un error,por favor revise los datos ingresados")
            }
        );
    }

    if (apartments) {
        return (
            <div className='contenedor-form-edit'>
                <form className='form-find-dni' onSubmit={handleFindByApartment}>
                    <div className="col-md-7">
                        <label htmlFor="selector" className="form-label">Torre-Apartamento</label>
                        <select required className="form-select" id="rol-selector" value={apartment} onChange={(e) => setApartment(e.target.value)}>
                            <option></option>
                            {apartments.map((apartment) => (
                                <option value={apartment.buildingName + "-" + apartment.apartmentNumber}>
                                    {apartment.buildingName + "-" + apartment.apartmentNumber}
                                </option>
                            ))}
                        </select>
                        <div className="invalid-feedback">
                            Seleccione Torre-Apartamento por favor.
                        </div>
                    </div>
                    <ButtonGreen id="submit-button" text="Buscar Residente" type="Submit" />
                </form>
                {showContentPackage()}
            </div>
        )
    }
    else {
        return (
            <div>Cargando datos</div>
        )
    }
}

export default EditPackage;
