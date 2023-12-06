import { Flex, Input, Text, Select } from '@chakra-ui/layout'
import React from 'react'

export default function TaskForm() {
  return (
    <>
        <Flex justifyContent='center' bgColor='gray.800' my={10}>
            <form>
                <Input 
                    type="text"
                    placeholder="Ingrese una tarea"
                    name="task"
                    color='gray.200'>


                </Input>
                <Text color='gray.100' textAlign='center'></Text>
                <Select bgColor='gray.800' borderColor='gray.600' color='gray.500' my={5}>
                    <option value="Todas" style={{  color: "darkslategray" }}>Todas</option>
                    <option value="Incompletas" style={{  color: "darkslategray" }}>Incompletas</option>
                    <option value="Completas" style={{  color: "darkslategray" }}>Completas</option>
                </Select>
                <Input
                    type="submit"
                    value="Send"
                    w={20} color='gray.200' cursor='pointer' boxShadow='2xl' ml={65}
                />
            </form>
        </Flex>
    </>
  )
}
