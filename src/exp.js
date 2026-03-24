import React from "react";
import Expraw from "./customization/Experience.json";
import "./styles/main.css";

export function Exp() {
    return (
        Expraw.companies.map((company) => (
            <div class="edu" key={company.name}>
                <span id="logo-block">
                <img src={require(`${company.logo}`)}  alt={company.name} />
                </span>
                <span class="text">
                    <p class="school">{company.name}  </p>
                    <p class="dep">{company.position_time} </p>
                    <p class="time">{company.discription}  </p>
                </span>
            </div>
        ))
    );
}

export default Exp;