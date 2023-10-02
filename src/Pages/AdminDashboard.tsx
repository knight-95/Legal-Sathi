import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";
import FlexColumn from "../_ui/flex/FlexColumn";
import FlexRow from "../_ui/flex/FlexRow";
import { style } from "../styles/StyledConstants";
import ApproveReject from "../Components/Dashboard/AdminPage/ApproveReject";
import Login from "./Login";
import ApprovalRequestsTable from "../Components/Dashboard/AdminPage/ApprovalRequestTable";
import Test from "../Components/Test";

function AdminDashboard() {
  const [selectedComponent, setSelectedComponent] = useState<ReactNode | null>(
    null
  );
  return (
    <FlexRow>
      <FlexColumn width="20%" vrAlign="flex-start" hrAlign="flex-start">
        <Button
          width="full"
          borderBottom="1px solid"
          onClick={() => setSelectedComponent(<ApprovalRequestsTable />)}
        >
          Profile Verification
        </Button>
        <Button
          width="full"
          borderBottom="1px solid"
          onClick={() => setSelectedComponent(<Login />)}
        >
          Show Component B
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
