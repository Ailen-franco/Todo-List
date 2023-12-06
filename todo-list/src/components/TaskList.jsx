import React from 'react'

export default function TaskList() {
  return (
    <>
        <Flex justifyContent='space-between' >
            <p> </p>
            <Flex padding={2} justifyContent='space-between' w={16}>
            <button  onClick={filterTask}> <FaCheck /> </button>
            <button  onClick={deleteTask}> <FaTrash /> </button>
            </Flex>
        </Flex>
    </>
  );
};
