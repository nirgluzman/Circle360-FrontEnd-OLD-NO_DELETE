/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashboardCircleOverridesProps = {
    DashboardCircle?: PrimitiveOverrideProps<FlexProps>;
    Circle?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    CircleDeleteIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector36943887?: PrimitiveOverrideProps<IconProps>;
    CircleConfigIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector37552729?: PrimitiveOverrideProps<IconProps>;
    CircleName?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DashboardCircleProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DashboardCircleOverridesProps | undefined | null;
}>;
export default function DashboardCircle(props: DashboardCircleProps): React.ReactElement;
