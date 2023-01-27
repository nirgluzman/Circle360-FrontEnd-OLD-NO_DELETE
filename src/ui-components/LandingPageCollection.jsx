/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import LandingPage from "./LandingPage";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function LandingPageCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="center"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "LandingPageCollection")}
      {...rest}
    >
      {(item, index) => (
        <LandingPage
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></LandingPage>
      )}
    </Collection>
  );
}
