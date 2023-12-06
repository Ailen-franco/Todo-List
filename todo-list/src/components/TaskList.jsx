import React from 'react'
import { Flex } from "@chakra-ui/react";
import { FaCheck, FaTrash } from "react-icons/fa";

export default function TaskList({ task: { task, id }, tasks, setTasks, checkTask }) {
    const filterTask = () => {
        checkTask(id);
    };

    

  return (
    <>
        <Flex justifyContent='space-between' >
            <p>{task}</p>
            <Flex padding={2} justifyContent='space-between' w={16}>
            <button  onClick={filterTask}> <FaCheck /> </button>
            <button  onClick={deleteTask}> <FaTrash /> </button>
            </Flex>
        </Flex>
    </>
  );
};
