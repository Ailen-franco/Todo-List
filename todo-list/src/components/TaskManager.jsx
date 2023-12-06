import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { Container } from "@chakra-ui/react";
import ContainerTask from "./ContainerTask";

export default function TaskManager() {
    const [allTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem("task")) || []);
    const [filteredTasks, setFilteredTasks] = useState(allTasks);
    const [filter, setFilter] = useState("Todas");

    const handleSubmit = (task) => {
        const trimmedTask = task.trim();
        if (trimmedTask === "") {
          return;
        }
        const newTaskObj = {
          id: crypto.randomUUID(),
          task: trimmedTask,
          completed: false,
        };
        const updatedTasks = [...allTasks, newTaskObj];
     
        localStorage.setItem("task", JSON.stringify(updatedTasks));
        setAllTasks(updatedTasks);
        setFilteredTasks(updatedTasks); // Actualizar filteredTasks también aquí
      };

    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);
     
        switch (selectedFilter) {
          case "Todas":
            setFilteredTasks(allTasks);
            break;
          case "Completas":
            setFilteredTasks(allTasks.filter((task) => task.completed));
            break;
          case "Incompletas":
            setFilteredTasks(allTasks.filter((task) => !task.completed));
            break;
          default:
            setFilteredTasks(allTasks);
            break;
        }
      };

    const checkTask = (taskId) => {
        const updatedTasks = allTasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        localStorage.setItem("task", JSON.stringify(updatedTasks));
        setAllTasks(updatedTasks);
      };

  return (
    <Container maxW="container.sm" >
        <TaskForm handleSubmit={handleSubmit} handleFilterChange={handleFilterChange} />
        <ContainerTask tasks={filteredTasks} setTasks={setAllTasks} checkTask={checkTask} />
    </Container>
  )
}
