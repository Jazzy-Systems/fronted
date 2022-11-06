import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/modules.css';
import authHeader from '../services/auth-header';

const RegisterVigilant = (props) => {
    const [nameCompany, setNameCompany] = useState("");
    const [companies, setCompanies] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        }
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    API_URL + "/api/v1/company/", requestOptions
                )
            ).json();
            console.log(data);
            setCompanies(data);
        };
        dataFetch();
    }, [API_URL]);
    if (companies) {
        return (
            <div>
                <label htmlFor="selector" className="form-label">Empresa de seguridad</label>
                <select required className="form-select" id="rol-selector" value={nameCompany} onChange={(e) => setNameCompany(e.target.value)}>
                    <option></option>
                    {companies.map((company) => (
                        <option value={company.companyName}>
                            {company.companyName}
                        </option>
                    ))}
                </select>
                <div className="invalid-feedback">
                    Seleccione la empresa de seguridad por favor.
                </div>
            </div>
        )
    }
    else {
        return (
            <div>Cargando datos</div>
        )
    }
}

export default RegisterVigilant;
