import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import FlexColumn from "../_ui/flex/FlexColumn";
import FlexRow from "../_ui/flex/FlexRow";
import { style } from "../styles/StyledConstants";
import Login from "./Login";

function AdminDashboard() {
  const [selectedComponent, setSelectedComponent] = useState<ReactNode | null>(
    null
  );
  return (
    <FlexRow>
      <FlexColumn width="20%" vrAlign="flex-start" hrAlign="flex-start">
        <FlexRow>
          <Image />
          <Box>
            <Text m={0}>Yash Gupta</Text>
            <Text m={0}>yashgupta@gmail.com</Text>
          </Box>
        </FlexRow>
        <Button
          width="full"
          borderBottom="1px solid"
        //   onClick={() => setSelectedComponent(<ApprovalRequestsTable />)}
        >
          Home
        </Button>
        <Button
          width="full"
          borderBottom="1px solid"
          onClick={() => setSelectedComponent(<Login />)}
        >
          Clients
        </Button>
        <Button
          width="full"
          borderBottom="1px solid"
          onClick={() => setSelectedComponent(<Login />)}
        >
          Appointments
        </Button>
        <Button
          width="full"
          borderBottom="1px solid"
          onClick={() => setSelectedComponent(<Login />)}
        >
          Earnings
        </Button>
      </FlexColumn>
      <FlexColumn width="80%" vrAlign="flex-start" hrAlign="flex-start">
        {selectedComponent ? (
          selectedComponent
        ) : (
          <Box>Choose the option to proceed</Box>
        )}
      </FlexColumn>
    </FlexRow>
  );
}

export default AdminDashboard;
