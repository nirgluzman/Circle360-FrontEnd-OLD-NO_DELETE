/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JoinCircleOverridesProps = {
    JoinCircle?: PrimitiveOverrideProps<ViewProps>;
    JoinButton?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    JoinCircle37242759?: PrimitiveOverrideProps<ViewProps>;
    "If you have an invite code, please type it here:"?: PrimitiveOverrideProps<TextProps>;
    "Join Circle"?: PrimitiveOverrideProps<TextProps>;
    BackToMyCircles?: PrimitiveOverrideProps<ViewProps>;
    BackIcon?: PrimitiveOverrideProps<IconProps>;
    "My Circles"?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type JoinCircleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: JoinCircleOverridesProps | undefined | null;
}>;
export default function JoinCircle(props: JoinCircleProps): React.ReactElement;
