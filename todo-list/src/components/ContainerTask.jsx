import React from 'react'
import { Flex, List } from "@chakra-ui/react";
import TaskList from "./TaskList";

export default function ContainerTask({ tasks, setTasks, checkTask }) {
  return (
    <Flex alignItems='center' justifyContent='center' flexDirection='column' bg='gray.800'>
        <List w='50%' color='gray.200' borderColor='gray.700' boxShadow='2xl' p='6' rounded='md' bg='gray.800'>
            {tasks.map((task) => {
                return <TaskList
                tasks={tasks}
                setTasks={setTasks}
                checkTask={checkTask}
                task={task}
                completed={task.completed}
                key={task.id}
                />;
            })}
        </List>
    </Flex>
  )
}
