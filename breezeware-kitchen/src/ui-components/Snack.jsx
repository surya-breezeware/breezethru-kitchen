/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Snack(props) {
  const { snacks, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="221px"
      height="280px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="23px"
      padding="14px 24px 15px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Snack")}
    >
      <Image
        width="70px"
        height="62px"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        src={snacks?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={snacks?.name}
          {...getOverrideProps(overrides, "Bajji")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="11px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={snacks?.description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </Flex>
      <Flex
        gap="9px"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Followers")}
      >
        <View
          width="34px"
          height="16px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "noto:bowl-with-spoon")}
        >
          <Icon
            width="31.69189453125px"
            height="9.373199462890625px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 31.69189453125,
              height: 9.373199462890625,
            }}
            paths={[
              {
                d: "M0.161155 1.56625C-0.141657 1.885 -0.433845 4.975 3.44162 7.07125C6.33428 8.635 10.2469 9.275 15.4001 9.36625C20.5532 9.4575 25.5283 8.64375 27.919 7.355C32.2354 5.02625 31.7838 2.2225 31.558 1.805C30.9869 0.7475 26.4926 0 16.003 0C6.24928 0.0025 0.93678 0.75 0.161155 1.56625Z",
                fill: "rgba(107,184,254,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="31%"
            bottom="10.42%"
            left="3.44%"
            right="3.35%"
            {...getOverrideProps(overrides, "Vector34462692")}
          ></Icon>
          <Icon
            width="3.0703125px"
            height="1.05670166015625px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 3.0703125,
              height: 1.05670166015625,
            }}
            paths={[
              {
                d: "M0 0.975659C0.108906 0.963159 2.13563 1.06816 2.17547 1.05566C2.21531 1.04316 3.07062 0.108159 3.07062 0.108159C3.07062 0.108159 2.30828 0.0331585 1.94172 0.00065852C1.57516 -0.0293415 0 0.975659 0 0.975659Z",
                fill: "rgba(29,137,254,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="32.96%"
            bottom="60.44%"
            left="73.21%"
            right="17.76%"
            {...getOverrideProps(overrides, "Vector34462693")}
          ></Icon>
          <Icon
            width="5.888671875px"
            height="4.374664306640625px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 5.888671875,
              height: 4.374664306640625,
            }}
            paths={[
              {
                d: "M5.82915 4.3287C5.41212 4.56495 2.93384 3.88995 1.28431 2.31245C-0.160691 0.931201 -0.123504 0.181201 0.147433 0.0624506C0.503371 -0.0937994 1.54462 0.0512009 1.78103 0.407451C2.09978 0.887451 2.08915 1.4437 3.20212 2.4687C4.89415 4.02745 6.18509 4.12745 5.82915 4.3287Z",
                fill: "rgba(224,235,246,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="51.78%"
            bottom="20.88%"
            left="8.94%"
            right="73.74%"
            {...getOverrideProps(overrides, "Vector34462694")}
          ></Icon>
          <Icon
            width="27.9033203125px"
            height="2.454742431640625px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 27.9033203125,
              height: 2.454742431640625,
            }}
            paths={[
              {
                d: "M0.00228293 1.16669C0.151033 1.92419 5.52463 2.38169 14.0246 2.44919C22.5246 2.51669 27.9035 1.95919 27.9035 1.25044C27.9035 0.541693 22.2723 0.0354429 14.3832 0.00169289C6.49416 -0.0320571 -0.141155 0.441693 0.00228293 1.16669Z",
                fill: "rgba(29,137,254,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="34.95%"
            bottom="49.71%"
            left="9.58%"
            right="8.35%"
            {...getOverrideProps(overrides, "Vector34462695")}
          ></Icon>
          <Icon
            width="7.29931640625px"
            height="2.22625732421875px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 7.29931640625,
              height: 2.22625732421875,
            }}
            paths={[
              {
                d: "M5.45859 2.0625L7.29938 0.165L4.9486 0L1.96828 0.21625L0 2.22625C0 2.22625 1.96828 2.2125 3.13969 2.17125C4.31109 2.12875 5.45859 2.0625 5.45859 2.0625L5.45859 2.0625Z",
                fill: "rgba(2,90,188,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="36.29%"
            bottom="49.8%"
            left="59.17%"
            right="19.36%"
            {...getOverrideProps(overrides, "Vector34462696")}
          ></Icon>
          <Icon
            width="12.9130859375px"
            height="6.136932373046875px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 12.9130859375,
              height: 6.136932373046875,
            }}
            paths={[
              {
                d: "M2.12234 6.11625C2.12234 6.11625 6.20234 4.05625 8.51594 2.92875C10.8295 1.80125 12.8722 0.94625 12.912 0.61375C12.9625 0.18625 11.228 0 11.228 0L0.28953 5.72375L0 6.1325C0 6.1325 0.78625 6.1425 1.17672 6.1325C1.5725 6.1225 2.12234 6.11625 2.12234 6.11625L2.12234 6.11625Z",
                fill: "rgba(157,156,156,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="11.86%"
            bottom="49.78%"
            left="58.32%"
            right="3.7%"
            {...getOverrideProps(overrides, "Vector34462697")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="16px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${snacks?.quantity}${"Cup"}`}
          {...getOverrideProps(overrides, "1 Cup")}
        ></Text>
      </Flex>
      <Button
        display="flex"
        width="144px"
        height="37px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="8px 16px 8px 16px"
        size="large"
        isDisabled={false}
        variation="link"
        children="Ingredients"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
