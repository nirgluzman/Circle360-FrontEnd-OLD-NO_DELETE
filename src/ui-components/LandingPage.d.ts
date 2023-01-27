/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandingPageOverridesProps = {
    LandingPage?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Title?: PrimitiveOverrideProps<ViewProps>;
    "A new way to communicate with your friends"?: PrimitiveOverrideProps<TextProps>;
    "Circle 360"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type LandingPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LandingPageOverridesProps | undefined | null;
}>;
export default function LandingPage(props: LandingPageProps): React.ReactElement;
