/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import {
  ButtonProps,
  DividerProps,
  IconProps,
  ImageProps,
  TextFieldProps,
  TextProps,
  ViewProps,
} from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type SignupOverridesProps = {
  Signup?: PrimitiveOverrideProps<ViewProps>;
  AppleSignin?: PrimitiveOverrideProps<ViewProps>;
  Button36943244?: PrimitiveOverrideProps<ButtonProps>;
  image36943245?: PrimitiveOverrideProps<ImageProps>;
  GoogleSignin?: PrimitiveOverrideProps<ViewProps>;
  Button36943247?: PrimitiveOverrideProps<ButtonProps>;
  image36943248?: PrimitiveOverrideProps<ImageProps>;
  Divider37222786?: PrimitiveOverrideProps<ViewProps>;
  Divider36943251?: PrimitiveOverrideProps<DividerProps>;
  OR?: PrimitiveOverrideProps<TextProps>;
  Divider36943249?: PrimitiveOverrideProps<DividerProps>;
  SignupButton?: PrimitiveOverrideProps<ButtonProps>;
  "By selecting Sign up below, you agree to our Terms of Service & Privacy Policy."?: PrimitiveOverrideProps<TextProps>;
  "Must be alphanumeric, minimum 8 characters, contains at least one lower case, one upper case, one number and one special character."?: PrimitiveOverrideProps<TextProps>;
  PasswordTextField?: PrimitiveOverrideProps<TextFieldProps>;
  EmailTextField?: PrimitiveOverrideProps<TextFieldProps>;
  NicknameTextField?: PrimitiveOverrideProps<TextFieldProps>;
  "Looks like you don\u2019t have an account. Let\u2019s create a new one for you."?: PrimitiveOverrideProps<TextProps>;
  "SIGN UP"?: PrimitiveOverrideProps<TextProps>;
  BackToSignIn?: PrimitiveOverrideProps<ViewProps>;
  image37132722?: PrimitiveOverrideProps<ImageProps>;
  BackButton?: PrimitiveOverrideProps<ViewProps>;
  MyIcon?: PrimitiveOverrideProps<ViewProps>;
  Vector?: PrimitiveOverrideProps<IconProps>;
  "Sign in"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SignupProps = React.PropsWithChildren<
  Partial<ViewProps> & {
    overrides?: SignupOverridesProps | undefined | null;
  }
>;
export default function Signup(props: SignupProps): React.ReactElement;
