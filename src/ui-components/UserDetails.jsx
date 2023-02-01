/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function UserDetails(props) {
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
      {...getOverrideProps(overrides, "UserDetails")}
      {...rest}
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
        top="35.09%"
        bottom="62.66%"
        left="8.84%"
        right="30.23%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Your email address cannot be changed."
        {...getOverrideProps(
          overrides,
          "Your email address cannot be changed."
        )}
      ></Text>
      <Flex
        gap="10px"
        direction="row"
        width="352px"
        height="48px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 23px - 168px)"
        left="calc(50% - 175px - 1px)"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="5px"
        padding="0px 0px 0px 16px"
        {...getOverrideProps(overrides, "Email")}
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
          children="Email"
          {...getOverrideProps(overrides, "EmailPlaceholder")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="352px"
        height="48px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 23px - 239px)"
        left="calc(50% - 175px - 1px)"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="5px"
        padding="0px 0px 0px 16px"
        {...getOverrideProps(overrides, "UserNameInput")}
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
          children="Nickname"
          {...getOverrideProps(overrides, "UserNamePlaceholder")}
        ></Text>
      </Flex>
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
        width="344px"
        height="44px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12.02%"
        bottom="83.26%"
        left="9.53%"
        right="10.47%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Profile Details"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="79px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43px"
        left="43px"
        {...getOverrideProps(overrides, "BackToUserSettings")}
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
          right="77.22%"
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
          top="calc(50% - 12px - 0px)"
          left="calc(50% - 24.5px - -15px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Profile"
          {...getOverrideProps(overrides, "Text")}
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
