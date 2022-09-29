/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Drinks(props) {
  const { test, overrides, ...rest } = props;
  return (
    <Flex
      gap="-11px"
      direction="column"
      width="247px"
      height="356px"
      justifyContent="center"
      position="relative"
      borderRadius="36px"
      padding="18px 0px 0px 0px"
      backgroundColor="rgba(4,125,149,1)"
      {...rest}
      {...getOverrideProps(overrides, "Drinks")}
    >
      <Flex
        gap="16px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 16px 16px 16px"
        {...getOverrideProps(overrides, "Header")}
      >
        <Flex
          gap="16px"
          width="215px"
          alignItems="center"
          grow="1"
          basis="215px"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          label={test?.name}
          {...getOverrideProps(overrides, "Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={test?.name}
            {...getOverrideProps(overrides, "Rene Brandel")}
          ></Text>
        </Flex>
      </Flex>
      <Image
        width="247px"
        height="90px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={test?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        height="54px"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 16px 0px 16px"
        {...getOverrideProps(overrides, "Options")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="20px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          letterSpacing="0.01px"
          width="205px"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={test?.quantity}
          {...getOverrideProps(overrides, "Quantity")}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        height="91px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="8px"
          direction="column"
          height="80px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 16px 3px 16px"
          {...getOverrideProps(overrides, "Area")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={test?.desription}
            {...getOverrideProps(
              overrides,
              "\u201CLorem ipsum dolor sit amet, consectetur"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={test?.name}
            {...getOverrideProps(overrides, "Timestamp")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
