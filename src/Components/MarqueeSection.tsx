import React from "react";
import Marquee from "react-fast-marquee";
import { Box } from "@chakra-ui/react";
import ExpertAreaCard from "./Cards/ExpertAreaCard";

const GradientBox = ({ children }: any) => {
  return <Box width="100%" sx={{

    "@media (max-width: 480px)": {
      borderRadius: "10px",
      padding: "1px"
    }
  }}>
    {children}
  </Box>
}


export default function MarqueeSection(props: any) {

  return (
    <>
      <Box
        style={{ marginTop: "30px", padding: "" }}
        sx={{
          "@media screen and (max-width: 768px)": {
            display: "none",
            //desktop
          },
        }}
      >
        <Marquee
          speed={props.speed}>
          <GradientBox>
            <ExpertAreaCard category="Criminal" />
          </GradientBox>
          <GradientBox>
            <ExpertAreaCard category="Family Issue" />
          </GradientBox>
          <GradientBox>
            <ExpertAreaCard category="Corporate" />
          </GradientBox>
          <GradientBox>
            <ExpertAreaCard category="Child Custody" />
          </GradientBox>
          <GradientBox>
            <ExpertAreaCard category="Blackmailing Issues" />
          </GradientBox>
          <GradientBox>
            <ExpertAreaCard category="Property Disputes" />
          </GradientBox>

        </Marquee>
      </Box>
      {/* <Box
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
      </Box> */}
    </>
  );
}
