import { Flex, Heading } from '@chakra-ui/react'

export default function Header() {
  return (
    <>
      <Flex alignItems='center' justifyContent='center' width="100%" height={52} bgColor='gray.800' >
          <Heading as='h2' size='3xl' noOfLines={1} color='gray.50' >
              Todo List
          </Heading>
      </Flex>
    </>
  )
}
