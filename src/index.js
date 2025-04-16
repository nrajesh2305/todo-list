import { TaskManager } from "./TaskManager.js";
import { Motivation } from "./motivation.js";
import './style.css';

export class UI
{
    // Create the website's overall interface here.

    constructor()
    {
        this.createUI();
    }

    createUI()
    {

        // UI for global operations.
        let global_container = document.createElement("div");
        let add_task_container = document.createElement("div");
        let task_list_container = document.createElement("div");
        let change_mode_container = document.createElement("div");
        let motivation = document.createElement("div");

        global_container.className = "global_container";
        add_task_container.className = "add_task_container";
        task_list_container.className = "task_list_container";
        change_mode_container.className = "todo-change-mode_container";
        motivation.className = "motivational_message";

        document.body.append(global_container);
        global_container.append(task_list_container);
        global_container.append(add_task_container);
        global_container.append(motivation);
        global_container.append(change_mode_container);
        
        // UI for add_task_container.
        let add_task_fillout = document.createElement("div");
        let add_task_title = document.createElement("h2");
        let task_name_section = document.createElement("div");
        let add_task_button = document.createElement("button");

        add_task_title.className = "add_task_title";
        add_task_title.innerText = "ADD TASK";

        add_task_fillout.className = "add_task_fillout";
        task_name_section.className = "task_name_section";

        add_task_button.className = "add_task_button";
        add_task_button.textContent = "ADD";

        add_task_container.append(add_task_fillout);
        add_task_fillout.append(add_task_title);
        add_task_fillout.append(task_name_section);
        add_task_fillout.append(add_task_button);
    }
}
const app = new UI();