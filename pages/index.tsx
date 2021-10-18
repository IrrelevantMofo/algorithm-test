import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TextField } from '../components/TextField/TextField'
import { useState } from 'react'
import { Flex, Grid, GridItem, Heading, Box, Button } from "@chakra-ui/react"

const Home: NextPage = () => {
  const [value, setValue] = useState<string>('')
  const [checker, setChecker] = useState<string|null>('No input')

  function CheckInput(input:string): void {
    
    if(input.length===0){
      setChecker('No input')
    } else if(input.length>25){
      setChecker('Invalid')
    } else {
      let vowels:number = Array.from(input).filter(letter => 'aeiou'.includes(letter)).length;
      let consonants:number = input.split('').filter(e => e.match(/[^aeiou]/) != null).length;
      if(oddEvenChecker(vowels,consonants)){
        setChecker('Unverified')
      } else {
        setChecker('Verified')
      }
    }
  }

  function oddEvenChecker(x:number, y:number):boolean {
    if((x*y)%2===0){
      return true
    } else {
      return false
    }
  }


  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Flex direction='column' background='gray.200' p={12} rounded={6}>
        <Heading mb={5}>
          Algorithm Test
        </Heading>
        <TextField 
          label='Input:'
          value={value}
          handleChange={e=>{
            setValue(e.target.value.toLowerCase())
          }}
        />
        <Button 
          colorScheme='teal'
          mb={6} 
          onClick={()=>{
          CheckInput(value)
        }}>
          Execute Function
        </Button>
        <Box textAlign='center'>
          <span>Output:</span>
          <br/>
          {checker}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Home
