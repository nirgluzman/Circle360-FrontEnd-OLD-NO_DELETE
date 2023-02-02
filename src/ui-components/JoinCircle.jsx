/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function JoinCircle(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="932px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "JoinCircle")}
      {...rest}
    >
      <View
        width="350px"
        height="127px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 63.5px - 163.5px)"
        left="calc(50% - 175px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "JoinButton")}
      >
        <Button
          width="350px"
          position="absolute"
          borderRadius="12px"
          top="81px"
          left="0px"
          size="large"
          isDisabled={false}
          variation="primary"
          children="JOIN"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Flex
          gap="10px"
          direction="row"
          width="352px"
          height="48px"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="calc(50% - 23px - 41.5px)"
          left="calc(50% - 175px - 1px)"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="5px"
          padding="0px 0px 0px 16px"
          {...getOverrideProps(overrides, "Input")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(128,128,128,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Invite code "
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
        </Flex>
      </View>
      <View
        width="303px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 50px - 304px)"
        left="calc(50% - 151.5px - 20.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "JoinCircle37242759")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="79%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="If you have an invite code, please type it here:"
          {...getOverrideProps(
            overrides,
            "If you have an invite code, please type it here:"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="500"
          color="rgba(13,26,38,1)"
          lineHeight="48px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="161px"
          height="44px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="56%"
          left="30.36%"
          right="16.5%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Join Circle"
          {...getOverrideProps(overrides, "Join Circle")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="110px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43px"
        left="43px"
        {...getOverrideProps(overrides, "BackToMyCircles")}
      >
        <Icon
          width="18px"
          height="15px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 15 }}
          paths={[
            {
              d: "M7 4L7 0L0 7L7 14L7 9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20.83%"
          bottom="16.67%"
          left="0%"
          right="83.64%"
          {...getOverrideProps(overrides, "BackIcon")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="30px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="My Circles"
          {...getOverrideProps(overrides, "My Circles")}
        ></Text>
      </View>
      <Image
        width="60px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25px"
        right="40px"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "ProfileImage")}
      ></Image>
    </View>
  );
}
