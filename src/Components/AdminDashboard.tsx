import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface ApprovalRequest {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  // Add more fields based on your registration form data
}

function AdminDashboard() {
  const [approvalRequests, setApprovalRequests] = useState<ApprovalRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<ApprovalRequest | null>(null);

  useEffect(() => {
    // Fetch approval requests when the component mounts
    fetch('/api/admin/approval-requests')
      .then((response) => response.json())
      .then((data: ApprovalRequest[]) => {
        setApprovalRequests(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleApproveReject = (id: string, status: string) => {
    fetch(`/api/admin/approval-requests/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((data: ApprovalRequest) => {
        // Update the approval request status in the frontend
        const updatedRequests = approvalRequests.map((request) =>
          request._id === data._id ? data : request
        );
        setApprovalRequests(updatedRequests);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box p={4} marginBottom="3rem">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            {/* Add more table headers for other fields */}
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {approvalRequests.map((data) => (
            <Tr key={data._id}>
              <Td>{data.firstName}</Td>
              <Td>{data.lastName}</Td>
              <Td>{data.email}</Td>
              {/* Add more table cells for other fields */}
              <Td>
                <Button
                  colorScheme="green"
                  size="sm"
                  onClick={() => handleApproveReject(data._id, 'approve')}
                >
                  Approve
                </Button>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleApproveReject(data._id, 'reject')}
                >
                  Reject
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default AdminDashboard;
