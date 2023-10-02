import React from 'react';
import {
    Avatar, Box, Link, Table, Tbody, Td, Text, Th, Thead, Tr, Flex, Tag,
} from '@chakra-ui/react';
import { FaCoins } from 'react-icons/fa';
import { style } from '../styles/StyledConstants';

const candidates = [
    {
        id: 1,
        name: 'John Doe',
        specializations: [
            'Cyber Crime', 'Family Issues', 'Criminal'
        ],
        score: 95,
        rank: 1,
        profilePicture: 'https://gateway.lighthouse.storage/ipfs/QmPsurChGSg8Pia8KuxytMGZJ1SDYAzJDrf7EyJEiE89LX',
        profileLink: '/profile/john-doe',
    },
    {
        id: 2,
        name: 'Dawid',
        specializations: [
            'Cyber Crime', 'Criminal',
        ],
        score: 35,
        rank: 2,
        profilePicture: 'https://gateway.lighthouse.storage/ipfs/QmPsurChGSg8Pia8KuxytMGZJ1SDYAzJDrf7EyJEiE89LX',
        profileLink: '/profile/john-doe',
    },
    {
        id: 3,
        name: 'Michale',
        specializations: [
            'Cyber Crime',
        ],
        score: 85,
        rank: 3,
        profilePicture: 'https://gateway.lighthouse.storage/ipfs/QmPsurChGSg8Pia8KuxytMGZJ1SDYAzJDrf7EyJEiE89LX',
        profileLink: '/profile/john-doe',
    },
    {
        id: 4,
        name: 'Green',
        specializations: [
            'Cyber Crime', 'Property Disputes'
        ],
        score: 115,
        rank: 4,
        profilePicture: 'https://gateway.lighthouse.storage/ipfs/QmPsurChGSg8Pia8KuxytMGZJ1SDYAzJDrf7EyJEiE89LX',
        profileLink: '/profile/john-doe',
    },
    {
        id: 5,
        name: 'Smith',
        specializations: [
            'Cyber Crime'
        ],
        score: 55,
        rank: 5,
        profilePicture: 'https://gateway.lighthouse.storage/ipfs/QmPsurChGSg8Pia8KuxytMGZJ1SDYAzJDrf7EyJEiE89LX',
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
        <Box overflowX="auto" maxWidth="fitContent" width="100%">


            <Table
                variant="striped"
                colorScheme="gray"
                size="md"
                width="100%"
            >
                <Thead>
                    <Tr background="#b0d6f1" color="black">
                        <Th width="2%">Rank</Th>
                        <Th width="15%">Profile</Th>
                        <Th width="15%">Name</Th>
                        <Th width="40%">Specialization</Th>
                        <Th width="5%">
                            <Flex align="center">
                                Score
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
                            <Td>
                                {candidate.specializations.map((specializations, index) => (
                                    <Tag key={index} margin="0.2rem" background="#a0d4eb" fontSize="0.7rem" style={{ cursor: 'pointer' }}>
                                        {specializations}
                                    </Tag>
                                ))}
                            </Td>
                            <Td fontWeight="bold">
                                <Flex align="center">
                                    <FaCoins style={{ marginRight: '4px', color: 'gold' }} />
                                    {candidate.score}
                                </Flex>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>


        </Box>
    );
};

export default Leaderboard;


