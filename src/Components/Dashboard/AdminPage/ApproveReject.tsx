import { Box, Button, Center, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FlexColumn from "../../../_ui/flex/FlexColumn";
import FlexRow from "../../../_ui/flex/FlexRow";
import { style } from "../../../styles/StyledConstants";

type Props = {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  city?: string;
  state?: string;
  barCouncilId?: string;
  gender?: string;
  barCouncilFile?: File;
  specializations?: string[];
  image?: File;
  description?: string;
  experience?: string;
  aadhar?: string;
  languages?: string[];
  onClose?: any;
};

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

function ApproveReject({
  _id,
  firstName,
  lastName,
  email,
  city,
  state,
  barCouncilFile,
  barCouncilId,
  gender,
  specializations,
  image,
  description,
  experience,
  aadhar,
}: Props) {
  const { id } = useParams<{ id: string }>();
  const [serviceProvider, setServiceProvider] = useState<ApprovalRequest | null>(
    null
  );
  const [approvalStatus, setApprovalStatus] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    // Fetch the service provider's data using the ID (id)
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/approval-request/${id}`
        );
        const data = await response.json();
        setServiceProvider(data); // Update the state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleApproveReject = (id: string, status: string) => {
    console.log("IDDD : ", id)
    fetch(`http://localhost:5000/api/v1/admin/approval-requests/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((data: ApprovalRequest) => {
        // Update the approval request status in the frontend
        setApprovalStatus(status);

        if (status === "reject") {
          // Send an email to the lawyer about the rejection
          fetch(`http://localhost:5000/api/send-rejection-email/${id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }), // Replace with the lawyer's email
          })
            .then((response) => response.json())
            .then(() => {
              setEmailSent(true);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {/* {approvalRequests.map((request) => ( */}
      <Box
        marginBottom="1rem"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        width="100%"
      >
        <Text
          fontSize={style.font.h3}
          fontWeight={style.fontWeight.dark}
          textAlign="center"
        >
          Your Information
        </Text>
        <FlexRow hrAlign="space-evenly">
          <FlexColumn width="50%" vrAlign="flex-start">
            <Text>First Name</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.firstName ? serviceProvider.firstName : "NA"}
            </Box>
            <Text>Last Name</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.lastName ? serviceProvider?.lastName : "NA"}
            </Box>
            <Text>EMAIL</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.email ? serviceProvider?.email : "NA"}
            </Box>
            <Text>DOB</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {firstName ? firstName : "NA"}
            </Box>
            <Text>CITY</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.city ? serviceProvider?.city : "NA"}
            </Box>
            <Text>State</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.state ? serviceProvider?.state : "NA"}
            </Box>
          </FlexColumn>

          <FlexColumn width="50%" vrAlign="flex-start">
            <Text textAlign="start">BAR COUNCIL ID </Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.barCouncilId ? serviceProvider?.barCouncilId : "NA"}
            </Box>
            <Text>SPECIALIZATIONS</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.specializations ? serviceProvider?.specializations : "specializations"}
            </Box>
            <Text>GENDER</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.gender ? serviceProvider?.gender : "Male"}
            </Box>
            <Text>EXPERIENCE</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.experience ? serviceProvider?.experience : "experience"}
            </Box>
            <Text>AADHAR NO.</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.aadhar ? serviceProvider?.aadhar : "aadhar"}
            </Box>
            <Text>State</Text>
            <Box
              marginBottom="1rem"
              paddingLeft="5px"
              rounded={"md"}
              border="2px solid #3d3d3d"
              maxW="20rem"
              minW="15rem"
            >
              {serviceProvider?.state ? serviceProvider?.state : "NA"}
            </Box>
          </FlexColumn>
        </FlexRow>
        <Text
          fontSize={style.font.h6}
          fontWeight={style.fontWeight.dark}
          textAlign="center"
          marginTop="2rem"
        >
          Description
        </Text>
        <FlexRow hrAlign="flex-start">
          <Box
            rounded={"md"}
            border="1px solid #3d3d3d"
            width="100%"
            padding="1rem"
            marginTop="1rem"
          >
            {serviceProvider?.description ? serviceProvider?.description : "Description"}
          </Box>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <Text
              marginTop="2rem"
              fontSize={style.font.h6}
              fontWeight={style.fontWeight.dark}
            >
              image
            </Text>
            {serviceProvider?.image}
          </FlexColumn>
          <FlexColumn>
            <Text
              marginTop="2rem"
              fontSize={style.font.h6}
              fontWeight={style.fontWeight.dark}
            >
              DOCUMENTS
            </Text>
            {serviceProvider?.barCouncilFile}
          </FlexColumn>
        </FlexRow>
        {approvalStatus === "approve" && (
          <Text color="green">Service provider has been approved.</Text>
        )}

        {approvalStatus === "reject" && !emailSent && (
          <Text color="red">Service provider has been rejected. Sending email...</Text>
        )}

        {approvalStatus === "reject" && emailSent && (
          <Text color="red">
            Service provider has been rejected, and the email has been sent to the lawyer.
          </Text>
        )}
        <Center>
          <Button
            colorScheme="green"
            size="sm"
            onClick={() => handleApproveReject(id || "", "approve")}
          >
            Approve
          </Button>
          <Button
            colorScheme="red"
            size="sm"
            marginLeft="0.5rem" // Add margin to separate the buttons
            onClick={() => handleApproveReject(id || "", "reject")}
          >
            Reject
          </Button>
        </Center>
      </Box>
    </>
  );
}

export default ApproveReject;
