/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserAppSettingsOverridesProps = {
    UserAppSettings?: PrimitiveOverrideProps<ViewProps>;
    RadiusSlider?: PrimitiveOverrideProps<ViewProps>;
    SliderField37172794?: PrimitiveOverrideProps<FlexProps>;
    SliderField37172799?: PrimitiveOverrideProps<FlexProps>;
    "Frame 20937172800"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 29037172801"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 28937172802"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 837172803"?: PrimitiveOverrideProps<IconProps>;
    "100 m"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 116537152935"?: PrimitiveOverrideProps<ViewProps>;
    "1 km"?: PrimitiveOverrideProps<TextProps>;
    RadiusSettings?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116437133123"?: PrimitiveOverrideProps<ViewProps>;
    Group137133126?: PrimitiveOverrideProps<TextProps>;
    "Set the radius for live notifications once your friends are nearby."?: PrimitiveOverrideProps<TextProps>;
    RefreshRateSlider?: PrimitiveOverrideProps<ViewProps>;
    SliderField37152922?: PrimitiveOverrideProps<FlexProps>;
    SliderField37152926?: PrimitiveOverrideProps<FlexProps>;
    "Frame 20937152927"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 29037152928"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 28937152929"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 837152930"?: PrimitiveOverrideProps<IconProps>;
    "3 min"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 116537152934"?: PrimitiveOverrideProps<ViewProps>;
    "10 min"?: PrimitiveOverrideProps<TextProps>;
    "Refresh rate"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116437133117"?: PrimitiveOverrideProps<ViewProps>;
    Group137133120?: PrimitiveOverrideProps<TextProps>;
    "How frequent do you want to update your location."?: PrimitiveOverrideProps<TextProps>;
    Incognito?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116437133111"?: PrimitiveOverrideProps<ViewProps>;
    Group137133114?: PrimitiveOverrideProps<TextProps>;
    "Make me not visible in all my circles."?: PrimitiveOverrideProps<TextProps>;
    OnOffToggle37222754?: PrimitiveOverrideProps<FlexProps>;
    label37222755?: PrimitiveOverrideProps<TextProps>;
    switch37222756?: PrimitiveOverrideProps<FlexProps>;
    track37222757?: PrimitiveOverrideProps<ViewProps>;
    thumb37222758?: PrimitiveOverrideProps<ViewProps>;
    PushNotifications?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 116437133106"?: PrimitiveOverrideProps<ViewProps>;
    Group137133109?: PrimitiveOverrideProps<TextProps>;
    "Allow app to send push notifications."?: PrimitiveOverrideProps<TextProps>;
    OnOffToggle37222746?: PrimitiveOverrideProps<FlexProps>;
    label37222747?: PrimitiveOverrideProps<TextProps>;
    switch37222748?: PrimitiveOverrideProps<FlexProps>;
    track37222749?: PrimitiveOverrideProps<ViewProps>;
    thumb37222750?: PrimitiveOverrideProps<ViewProps>;
    BackProfileandTitle?: PrimitiveOverrideProps<ViewProps>;
    "App Settings"?: PrimitiveOverrideProps<TextProps>;
    "Back to profile"?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    BackButton?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserAppSettingsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UserAppSettingsOverridesProps | undefined | null;
}>;
export default function UserAppSettings(props: UserAppSettingsProps): React.ReactElement;
