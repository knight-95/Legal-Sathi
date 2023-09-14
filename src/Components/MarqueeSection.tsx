import React from "react";
import Marquee from "react-fast-marquee";
import { Box } from "@chakra-ui/react";
import { BrandLogos, Landing } from "../icons/IconImage";

const GradientBox = ({children}: any) => {
  return <Box className="me-md-5 ms-3" sx={{
    background: "linear-gradient(to right,rgba(25, 124, 236, 1),rgba(0, 74, 217, 0))",
    padding: "2px",
    borderRadius: "15px",

    "@media (max-width: 480px)":{
      borderRadius: "10px",
      padding: "1px"
    }
  }}>
    {children}
  </Box>
}

const LogoBox = ({children}: any) => {
  return <Box 
    sx={{
      padding: "15px",
      backgroundColor: "#000c29",
      borderRadius: "15px",
      "@media (max-width: 480px)":{
        padding: "8px",
        borderRadius: "10px"
      }
    }}
  >
    {children}
  </Box>
}

export default function MarqueeSection(props: any) {
  
  return (
    <>
      <Box
        style={{ marginTop: "30px", padding: "0% 6%" }}
        sx={{
          "@media screen and (max-width: 768px)": {
            display: "none",
            //desktop
          },
        }}
      >
        <Marquee
          speed={props.speed}
          gradient={true}
          gradientColor={[0, 5, 17]}
          gradientWidth={100}
        >
          <GradientBox>
            <LogoBox>
            <BrandLogos path= {props.images[0]}/>
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[1]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[2]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[3]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[4]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[5]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[6]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[7]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[8]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[9]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[10]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[11]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[12]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[13]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[14]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[15]} />
            </LogoBox>
          </GradientBox>
          <GradientBox>
            <LogoBox>
              <BrandLogos path={props.images[16]} />
            </LogoBox>
          </GradientBox>
        </Marquee>
      </Box>
      <Box
        sx={{
          marginTop:"20px", padding: "0% 6%",
          "@media screen and (min-width: 768px)": {
            display: "none",
          },
        }}
      >
        <Marquee
          speed={props.speed}
          gradient={true}
          gradientColor={[0, 5, 17]}
          gradientWidth={100}
        >
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[0]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[1]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[2]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[3]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[4]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[5]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[6]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[7]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[8]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[9]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[10]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[11]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[12]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[13]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[14]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[15]} />
            </LogoBox>
          </GradientBox>
          <GradientBox className="me-md-5 ms-3">
            <LogoBox>
              <BrandLogos path={props.images[16]} />
            </LogoBox>
          </GradientBox>
        </Marquee>
      </Box>
    </>
  );
}
