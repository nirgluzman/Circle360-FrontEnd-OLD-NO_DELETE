/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserSettingsOverridesProps = {
    UserSettings?: PrimitiveOverrideProps<ViewProps>;
    DeleteAccountButton?: PrimitiveOverrideProps<ViewProps>;
    DeleteAccount?: PrimitiveOverrideProps<ButtonProps>;
    SignOutButton?: PrimitiveOverrideProps<ViewProps>;
    SignOut?: PrimitiveOverrideProps<ButtonProps>;
    AppSettingsButton37342728?: PrimitiveOverrideProps<ViewProps>;
    AppSettingsButton37132975?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 1503"?: PrimitiveOverrideProps<FlexProps>;
    "ant-design:setting-filled"?: PrimitiveOverrideProps<ViewProps>;
    Vector37152790?: PrimitiveOverrideProps<IconProps>;
    ">37132984"?: PrimitiveOverrideProps<TextProps>;
    ProfileDetailsButton37342727?: PrimitiveOverrideProps<ViewProps>;
    ProfileDetailsButton37132960?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 1504"?: PrimitiveOverrideProps<FlexProps>;
    "fa6-solid:user-large"?: PrimitiveOverrideProps<ViewProps>;
    Vector37152788?: PrimitiveOverrideProps<IconProps>;
    ">37132983"?: PrimitiveOverrideProps<TextProps>;
    UserSettingsPhotoSettings?: PrimitiveOverrideProps<ViewProps>;
    Vector37152775?: PrimitiveOverrideProps<IconProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    UserSettingsHeader?: PrimitiveOverrideProps<ViewProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    BackButton?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector37132947?: PrimitiveOverrideProps<IconProps>;
    "My Circles"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserSettingsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UserSettingsOverridesProps | undefined | null;
}>;
export default function UserSettings(props: UserSettingsProps): React.ReactElement;
