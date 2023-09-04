import React from "react";

export default function FilterButton(props) {
    return (
        <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Montrer </span>
            <span>{props.name}</span>
            <span className="visually-hidden"> les tâches</span>
        </button>
    );
}