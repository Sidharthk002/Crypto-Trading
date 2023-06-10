import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <HStack bg={'black'} p={'4'} shadow={'base'}>
        <Button variant={'unstyled'} color={'white'}>
            <Link to={'/'}>Home</Link>
        </Button>
        <Button  variant={'unstyled'} color={'white'}>
            <Link to={'/exchange'}>Exchanges</Link>
        </Button>
        <Button  variant={'unstyled'} color={'white'}>
            <Link to={'/coin'}>Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header
