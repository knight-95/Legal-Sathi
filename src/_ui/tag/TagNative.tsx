import { style } from "../../styles/StyledConstants";
import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Text,
  useColorMode,
} from "@chakra-ui/react";

type Props = {
  size?: string;
  variant?: string;
  value?: string;
  icon?: any;
  leftElement?: any;
  rightElement?: any;
  close?: boolean;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginLeft?: string;
  marginBottom?: string;
  lineHeight?: string;
};

const TagNative = ({
  size,
  variant,
  value,
  icon,
  close = false,
  marginBottom,
  marginLeft,
  marginRight = "xxs",
  marginTop,
  lineHeight,
}: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Tag
      size={size}
      key={size ? size : "md"}
      borderRadius={"2xl"}
      // variant={variant ? variant : "solid"}
      bgGradient={variant ? variant : style.dropdown.bg.active}
      marginTop={marginTop}
      marginRight={style.margin[marginRight]}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingY={"3px"}
    >
      <TagLabel
        style={{
          lineHeight: lineHeight ? lineHeight : "1",
          fontSize: "12px",
        }}
      >
        <Text color="#fff" mb={0}>
          {value}
        </Text>
      </TagLabel>

      {close && <TagCloseButton />}
    </Tag>
  );
};

export default TagNative;
