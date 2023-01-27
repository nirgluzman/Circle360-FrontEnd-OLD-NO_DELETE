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
    GroupName?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    DeleteGroup?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Group1?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DashboardCircleProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DashboardCircleOverridesProps | undefined | null;
}>;
export default function DashboardCircle(props: DashboardCircleProps): React.ReactElement;
