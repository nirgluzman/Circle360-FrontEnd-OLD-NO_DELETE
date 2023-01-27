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
    SendInviteButton?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    GroupChenges?: PrimitiveOverrideProps<ViewProps>;
    MyIcon37152740?: PrimitiveOverrideProps<ViewProps>;
    Vector37152741?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<TextProps>;
    HeaderCircleSettings?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    BackButton?: PrimitiveOverrideProps<ViewProps>;
    MyIcon37132849?: PrimitiveOverrideProps<ViewProps>;
    Vector37132850?: PrimitiveOverrideProps<IconProps>;
    "My Circles"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CircleSettingsHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CircleSettingsHeaderOverridesProps | undefined | null;
}>;
export default function CircleSettingsHeader(props: CircleSettingsHeaderProps): React.ReactElement;
