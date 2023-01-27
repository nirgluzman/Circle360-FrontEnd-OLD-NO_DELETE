/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SendInviteOverridesProps = {
    SendInvite?: PrimitiveOverrideProps<ViewProps>;
    QRCode?: PrimitiveOverrideProps<ImageProps>;
    InvitationCode37242876?: PrimitiveOverrideProps<ViewProps>;
    InvitationCode37132918?: PrimitiveOverrideProps<TextProps>;
    "Here is your invitation code:"?: PrimitiveOverrideProps<TextProps>;
    SendInviteForm?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    SendInviteText?: PrimitiveOverrideProps<ViewProps>;
    "Please enter the email of the member you would like to invite:"?: PrimitiveOverrideProps<TextProps>;
    "Invite New Member"?: PrimitiveOverrideProps<TextProps>;
    SendInviteHeader?: PrimitiveOverrideProps<ViewProps>;
    BackButton?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "My Circles"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SendInviteProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SendInviteOverridesProps | undefined | null;
}>;
export default function SendInvite(props: SendInviteProps): React.ReactElement;
