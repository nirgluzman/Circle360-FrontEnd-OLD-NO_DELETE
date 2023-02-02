/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CircleSettingsHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="322px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CircleSettingsHeader")}
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
        top="239px"
        left="41px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SendInviteButton")}
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
          children="SEND INVITE"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </View>
      <View
        width="273px"
        height="44px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="112px"
        left="40px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="18px"
          height="18px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 18.00244140625,
            height: 18.00244140625,
          }}
          paths={[
            {
              d: "M0 14.2524L0 18.0024L3.75 18.0024L14.81 6.94244L11.06 3.19244L0 14.2524ZM17.71 2.63244L15.37 0.292444C15.2775 0.19974 15.1676 0.126193 15.0466 0.0760114C14.9257 0.02583 14.796 4.44089e-16 14.665 0C14.534 0 14.4043 0.02583 14.2834 0.0760114C14.1624 0.126193 14.0525 0.19974 13.96 0.292444L12.13 2.12244L15.88 5.87244L17.71 4.04244C17.8027 3.94993 17.8762 3.84004 17.9264 3.71907C17.9766 3.59809 18.0024 3.46841 18.0024 3.33744C18.0024 3.20648 17.9766 3.07679 17.9264 2.95582C17.8762 2.83485 17.8027 2.72496 17.71 2.63244L17.71 2.63244Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="29.54%"
          bottom="29.55%"
          left="92.31%"
          right="1.1%"
          {...getOverrideProps(overrides, "EditIcon")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="500"
          color="rgba(13,26,38,1)"
          lineHeight="48px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="239px"
          height="44px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="12.45%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Group"
          {...getOverrideProps(overrides, "GroupName")}
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
