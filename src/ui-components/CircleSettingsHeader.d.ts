/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CircleSettingsHeaderOverridesProps = {
    CircleSettingsHeader?: PrimitiveOverrideProps<ViewProps>;
    InviteNewMemberButton?: PrimitiveOverrideProps<ButtonProps>;
    EditIcon?: PrimitiveOverrideProps<IconProps>;
    GroupName?: PrimitiveOverrideProps<TextProps>;
    BackToMyCircles?: PrimitiveOverrideProps<ViewProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CircleSettingsHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CircleSettingsHeaderOverridesProps | undefined | null;
}>;
export default function CircleSettingsHeader(props: CircleSettingsHeaderProps): React.ReactElement;
