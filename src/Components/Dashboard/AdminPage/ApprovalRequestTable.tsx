import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApproveReject from "./ApproveReject";
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";


interface ApprovalRequest {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    state: string;
    barCouncilFile: File;
    barCouncilId: string;
    gender: string;
    specializations: string[];
    image: File;
    description: string;
    experience: number;
    aadhar: string;
    languages: string[];
}


const dataArray: ApprovalRequest[] = [];
function ApprovalRequestsTable() {
    const navigate = useNavigate();
    const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
    const getdata = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/v1/approval-requests");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return null; // You can return an empty array or handle the error as needed
        }
    };
    useEffect(() => {
        getdata().then((data) => {
            if (data) {
                dataArray.push(...data.unapprovedProviders);
                // console.log(dataArray);
                // console.log(data);
            }
        });
    }, []);


    const handleViewDetails = (_id: string) => {
        navigate(`/approve-reject/${_id}`);
      };

    return (
        <div>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Aadhar Number</Th>
                            <Th>View Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {dataArray
                            .map((item) => (
                                <Tr key={item._id}>
                                    <Td>{item.firstName}</Td>
                                    <Td>{item.lastName}</Td>
                                    <Td>{item.aadhar}</Td>
                                    <Td><Button onClick={() => handleViewDetails(item._id)}>View Details</Button></Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>

            {selectedRequestId && (
                <ApproveReject _id={selectedRequestId} onClose={() => setSelectedRequestId(null)} />
            )}
        </div>
    );
}


export default ApprovalRequestsTable;
