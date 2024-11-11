import { TaskManager } from "./TaskManager.js";
import { Motivation } from "./motivation.js";

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
        let motivation = document.createElement("div");

        global_container.className = "global_container";
        add_task_container.className = "add_task_container";
        task_list_container.className = "task_list_container";
        motivation.className = "motivational_message";

        document.body.append(global_container);
        global_container.append(task_list_container);
        global_container.append(add_task_container);
        global_container.append(motivation);
        
        // UI for add_task_container.
        let add_task_fillout = document.createElement("div");
        add_task_fillout.className = "add_task_fillout";
        add_task_container.append(add_task_fillout);

    }
}