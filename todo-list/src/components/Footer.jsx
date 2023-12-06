import { Flex, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <>
        <Flex alignItems='center' justifyContent='center' width="100%" height={80} bgColor='gray.800'>
            <Text color='gray.50' boxShadow='2xl' p='6' rounded='md' bg='gray.800' >
                By Ailu ♥
            </Text>
        </Flex>
    </>
  )
}