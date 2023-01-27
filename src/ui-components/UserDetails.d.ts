/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDetailsOverridesProps = {
    UserDetails?: PrimitiveOverrideProps<ViewProps>;
    FormField?: PrimitiveOverrideProps<ViewProps>;
    "Your email address cannot be changed."?: PrimitiveOverrideProps<TextProps>;
    Email?: PrimitiveOverrideProps<FlexProps>;
    placeholder37133074?: PrimitiveOverrideProps<TextProps>;
    LastName?: PrimitiveOverrideProps<FlexProps>;
    placeholder37133070?: PrimitiveOverrideProps<TextProps>;
    FirstName?: PrimitiveOverrideProps<FlexProps>;
    placeholder37133072?: PrimitiveOverrideProps<TextProps>;
    BackButton?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    "Profile Details"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type UserDetailsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UserDetailsOverridesProps | undefined | null;
}>;
export default function UserDetails(props: UserDetailsProps): React.ReactElement;
