import React from "react";
import Awdraw from "./customization/Award.json";
import "./styles/main.css";

export function Awd() {
    return (
        <div class="pub-list">
        {Awdraw.awards.map((award) => (
            <p key={award.entry}>{award.entry}</p>
        ))}
        </div>
    );
}