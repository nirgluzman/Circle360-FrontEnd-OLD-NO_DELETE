/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SigninOverridesProps = {
    Signin?: PrimitiveOverrideProps<ViewProps>;
    Signup?: PrimitiveOverrideProps<ViewProps>;
    Button37452728?: PrimitiveOverrideProps<ButtonProps>;
    SignupMessage?: PrimitiveOverrideProps<ViewProps>;
    "If you don\u2019t have an account, please sign up first."?: PrimitiveOverrideProps<TextProps>;
    AppleSignin?: PrimitiveOverrideProps<ViewProps>;
    Button36743305?: PrimitiveOverrideProps<ButtonProps>;
    image36743179?: PrimitiveOverrideProps<ImageProps>;
    GoogleSignin?: PrimitiveOverrideProps<ViewProps>;
    Button36743301?: PrimitiveOverrideProps<ButtonProps>;
    image36743175?: PrimitiveOverrideProps<ImageProps>;
    Divider37152845?: PrimitiveOverrideProps<ViewProps>;
    Divider36743134?: PrimitiveOverrideProps<DividerProps>;
    OR?: PrimitiveOverrideProps<TextProps>;
    Divider36743137?: PrimitiveOverrideProps<DividerProps>;
    LoginWithEmail?: PrimitiveOverrideProps<ViewProps>;
    LoginButton?: PrimitiveOverrideProps<ViewProps>;
    Button36743129?: PrimitiveOverrideProps<ButtonProps>;
    Input36892715?: PrimitiveOverrideProps<FlexProps>;
    placeholder36892716?: PrimitiveOverrideProps<TextProps>;
    Input36892708?: PrimitiveOverrideProps<FlexProps>;
    placeholder36892709?: PrimitiveOverrideProps<TextProps>;
    "Please sign in to connect with your circle."?: PrimitiveOverrideProps<TextProps>;
    "SIGN IN"?: PrimitiveOverrideProps<TextProps>;
    BackToHome?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SigninProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SigninOverridesProps | undefined | null;
}>;
export default function Signin(props: SigninProps): React.ReactElement;
