import TableNative from "../_ui/table/TableNative";
import GlobalIcons from "../styles/GlobalIcons";
import { style } from "../styles/StyledConstants";
import { Box, Image, Td, Text, Th, useColorMode } from "@chakra-ui/react";

type Prop = {
  txnData?: any;
  displayFrom?: boolean;
};

const TxnTable = ({ txnData, displayFrom = true }: Prop) => {
  return (
    <div>
      <TableNative
        data={txnData}
        theadBottomBorder="2px solid #e2e2e2"
        theadChildren={
          <>
            <Th
              color="#3d3d3d#"
              style={{
                textAlign: "center",
                fontSize: "1rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                textTransform: "capitalize",
              }}
            >
              Txn Hash
            </Th>
            <Th
              color="#3d3d3d#"
              style={{
                textAlign: "center",
                fontSize: "1rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                textTransform: "capitalize",
              }}
            >
              Time of Creation
            </Th>
            <Th
              color="#3d3d3d#"
              style={{
                textAlign: "center",
                fontSize: "1rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                textTransform: "capitalize",
              }}
            >
              Method Name
            </Th>
            {displayFrom && (
              <Th
                color="#3d3d3d#"
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  textTransform: "capitalize",
                }}
              >
                From
              </Th>
            )}
            <Th
              color="#3d3d3d#"
              style={{
                textAlign: "center",
                fontSize: "1rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                textTransform: "capitalize",
              }}
            >
              To
            </Th>

            {/* <Box width="100%">
                <Divider
                  orientation="horizontal"
                  borderColor="#004ad9"
                  border={style.card.border.meta}
                  height="5px"
                  width={0}
                />
              </Box> */}
          </>
        }
        tbodyChildren={(item: any) => {
          return (
            <>
              <Td
                color="#3d3d3d#"
                _hover={{ textDecoration: "underline" }}
                cursor={style.table.cursor.pointer}
                //   onClick={() => {
                //     router.push(
                //       `/search/transaction/${item?.transaction?.txn_hash}`
                //     );
                //   }}
                style={{
                  textAlign: "center",
                  paddingTop: `${style.padding.lg}`,
                  paddingBottom: `${style.padding.lg}`,
                }}
              >
                Txn Hash
              </Td>
              <Td color="#3d3d3d#" style={{ textAlign: "center" }}>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  {/* <Image
                      src={colorMode == "light" ? "/assets/icons/successful-light.svg" : "/assets/icons/coloured-successful.svg"}
                      alt=""
                      height="1.5rem"
                    /> */}
                  <Text color="#3d3d3d#" paddingLeft={2} marginBottom={0}>
                    TimeStamp
                  </Text>
                </Box>
              </Td>
              <Td color="#3d3d3d#" style={{ textAlign: "center" }}>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: "50%",
                      alignItems: "center",
                    }}
                  >
                    {/* <Image
                        alt=""
                        height="1.5rem"
                        src={colorMode == "light" ? "/assets/icons/deploy-light.svg" : GlobalIcons["icon-coloured-deploy"]}
                      /> */}
                    <Text
                      color="#3d3d3d#"
                      marginLeft={style.padding.xs}
                      marginBottom={0}
                      width="80%"
                      textAlign="left"
                    >
                      Method Name
                    </Text>
                  </Box>
                </Box>
              </Td>
              {displayFrom && (
                <Td
                  color="#3d3d3d#"
                  style={{
                    textAlign: "center",
                    paddingBottom: "0",
                    paddingTop: "0",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box width="1.7rem" height="1.5rem">
                      {/* <Avatar
                          size="1.5rem"
                          name={item?.transaction?.from}
                          variant="pixel"
                          colors={["#021E62", "#197CEC", "#231F20", "#5BA1FF", "#5BA1FF"]}
                        /> */}
                    </Box>
                    <Text
                      color="#3d3d3d#"
                      paddingLeft={2}
                      marginBottom={0}
                      _hover={{ textDecoration: "underline" }}
                      cursor={style.table.cursor.pointer}
                      // onClick={() => {
                      //   router.push(
                      //     `/search/accounts/${item?.transaction?.from}`
                      //   );
                      // }}
                    >
                      Transaction From
                    </Text>
                  </Box>
                </Td>
              )}
              <Td
                color="#3d3d3d#"
                style={{
                  textAlign: "center",
                  paddingBottom: "0",
                  paddingTop: "0",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    color="#3d3d3d#"
                    paddingLeft={2}
                    marginBottom={0}
                    // _hover={{ textDecoration: "underline" }}
                    // cursor={displayFrom && style.table.cursor.pointer}
                    // onClick={() => {
                    //   router.push(
                    //     `/search/accounts/${item?.transaction?.to}`
                    //   );
                    // }}
                  >
                    Transaction To
                  </Text>
                </Box>
              </Td>
            </>
          );
        }}
      />
    </div>
  );
};
export default TxnTable;
