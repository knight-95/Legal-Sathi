import React from 'react';
import {
    Avatar, Box, Link, Table, Tbody, Td, Text, Th, Thead, Tr, Flex,
} from '@chakra-ui/react';
import { FaCoins } from 'react-icons/fa';
import leaderImg from '../assets/leadersImg.png'

const candidates = [
    {
        id: 1,
        name: 'John Doe',
        score: 95,
        rank: 1,
        profilePicture: 'https://example.com/john-doe.jpg',
        profileLink: '/profile/john-doe',
    },
    {
        id: 2,
        name: 'Dawid',
        score: 35,
        rank: 2,
        profilePicture: 'https://example.com/john-doe.jpg',
        profileLink: '/profile/john-doe',
    },
    {
        id: 3,
        name: 'Michale',
        score: 85,
        rank: 3,
        profilePicture: 'https://example.com/john-doe.jpg',
        profileLink: '/profile/john-doe',
    },
    {
        id: 4,
        name: 'Green',
        score: 115,
        rank: 4,
        profilePicture: 'https://example.com/john-doe.jpg',
        profileLink: '/profile/john-doe',
    },
    {
        id: 5,
        name: 'Smith',
        score: 55,
        rank: 5,
        profilePicture: 'https://example.com/john-doe.jpg',
        profileLink: '/profile/john-doe',
    },

];

candidates.sort((a, b) => b.score - a.score);

// Assign ranks based on the sorted order
candidates.forEach((candidate, index) => {
    candidate.rank = index + 1;
});

const Leaderboard = () => {
    return (
        <Box overflowX="auto" maxWidth="fitContent">
            <Flex>
                <Box width="30%">
                    <Text fontSize="3rem" fontWeight="bold" justifyContent="center">Leader Board</Text>
                    <img
                        src={leaderImg}
                        alt="Leaderboard Image"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
                <Box width="50%">
                    <Table
                        variant="striped"
                        colorScheme="teal"
                        size="md"
                        width="100%"
                    >
                        <Thead>
                            <Tr>
                                <Th width="10%">Rank</Th>
                                <Th width="15%">Profile</Th>
                                <Th width="20%">Name</Th>
                                <Th width="15%">
                                    <Flex align="center">
                                        <FaCoins style={{ marginRight: '4px' }} /> Score
                                    </Flex>
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {candidates.map((candidate) => (
                                <Tr key={candidate.id}>
                                    <Td fontWeight="bold">{candidate.rank}</Td>
                                    <Td>
                                        <Avatar size="sm" src={candidate.profilePicture} />
                                    </Td>
                                    <Td>
                                        <Link href={candidate.profileLink} fontWeight="bold">
                                            {candidate.name}
                                        </Link>
                                    </Td>
                                    <Td fontWeight="bold">
                                        <Flex align="center">
                                            <FaCoins style={{ marginRight: '4px' }} />
                                            {candidate.score}
                                        </Flex>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    );
};

export default Leaderboard;