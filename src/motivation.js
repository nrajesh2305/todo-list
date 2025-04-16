import { TaskManager } from "./TaskManager.js";
import "./style.css";

export class Motivation
{
    constructor()
    {
        this.createMessage();
    }

    determineMessage()
    {
        
    }

    createMessage()
    {
        let motivation_container = document.createElement("div");
        let motivational_message = document.createElement("h2");
        motivational_message.className = "motivational_message";
        motivation_container.appendChild(motivational_message);
        motivational_message.innerText = determineMessage();
    }
}