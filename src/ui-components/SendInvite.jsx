/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SendInvite(props) {
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
      {...getOverrideProps(overrides, "SendInvite")}
      {...rest}
    >
      <Image
        width="280px"
        height="280px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="610px"
        left="75px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "QRCodeImage")}
      ></Image>
      <View
        width="293px"
        height="93px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 46.5px - -38.5px)"
        left="calc(50% - 146.5px - 25.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "InvitationCode37242876")}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="500"
          color="rgba(13,26,38,1)"
          lineHeight="72px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="242px"
          height="61px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="34.41%"
          bottom="0%"
          left="17.41%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ABC123"
          {...getOverrideProps(overrides, "InvitationCode37132918")}
        ></Text>
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
          top="0%"
          bottom="77.42%"
          left="0%"
          right="36.86%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Here is your invitation code:"
          {...getOverrideProps(overrides, "Here is your invitation code:")}
        ></Text>
      </View>
      <View
        width="350px"
        height="127px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 63.5px - 142.5px)"
        left="calc(50% - 175px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SendInviteForm")}
      >
        <Button
          width="350px"
          position="absolute"
          borderRadius="12px"
          top="calc(50% - 23px - -40.5px)"
          left="calc(50% - 175px - 0px)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="SEND INVITATION"
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
            children="Email"
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
        </Flex>
      </View>
      <View
        width="350px"
        height="121px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 60.5px - 293.5px)"
        left="calc(50% - 175px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SendInviteText")}
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
          width="350px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="65.29%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Looks like you don’t have an account. Let’s create a new one for you."
          {...getOverrideProps(
            overrides,
            "Please enter the email of the member you would like to invite:"
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
          width="344px"
          height="44px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="63.64%"
          left="0.86%"
          right="0.86%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Invite New Member"
          {...getOverrideProps(overrides, "Invite New Member")}
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
