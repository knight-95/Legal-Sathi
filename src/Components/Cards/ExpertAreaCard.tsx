'use client'

import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react'


type Props = {
    index?: string;
    category?: string;
    description?: string;
    onClick?: any;
    buttonText?: string;
    bgGrid?: string;
    imgUrl?: string;
    headingFontSize?: string;
    descriptionFontSize?: string;
};


export default function ExpertAreaCard({
    bgGrid,
    index,
    category,
    description,
    headingFontSize,
    descriptionFontSize,
    onClick,
    buttonText,
    imgUrl,
}: Props) {
    return (
        <Center py={6}>
            <Box
                // maxW={'270px'}
                // w={'15%'}
                mx={'2rem'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit="cover"
                    alt="#"
                />

                <Box p={6} _hover={{ cursor: 'pointer' }}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Text fontSize="1rem" fontWeight="bold">{category}</Text>
                    </Stack>

                    <Button
                        w={'full'}
                        bg={useColorModeValue('#4c50e0', '#4c50e0')}
                        color={'white'}
                        rounded={'xl'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                        <Text>Consult Now </Text>
                    </Button>
                </Box>
            </Box>
        </Center>
    )
}