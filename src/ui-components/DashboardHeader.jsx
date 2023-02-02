/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function DashboardHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="275px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DashboardHeader")}
      {...rest}
    >
      <View
        width="350px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 23px - -77.5px)"
        left="calc(50% - 175px - 3px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "JoinButton")}
      >
        <Button
          width="350px"
          position="absolute"
          borderRadius="12px"
          top="0px"
          left="0px"
          size="large"
          isDisabled={false}
          variation="primary"
          children="JOIN"
          {...getOverrideProps(overrides, "Join")}
        ></Button>
      </View>
      <View
        width="350px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 23px - -16.5px)"
        left="calc(50% - 175px - 3px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "CreateNewButton")}
      >
        <Button
          width="350px"
          position="absolute"
          borderRadius="12px"
          top="0px"
          left="0px"
          size="large"
          isDisabled={false}
          variation="primary"
          children="CREATE NEW"
          {...getOverrideProps(overrides, "CreateNew")}
        ></Button>
      </View>
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
        top="12%"
        bottom="72%"
        left="31.4%"
        right="31.16%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Circles"
        {...getOverrideProps(overrides, "My Circles")}
      ></Text>
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
