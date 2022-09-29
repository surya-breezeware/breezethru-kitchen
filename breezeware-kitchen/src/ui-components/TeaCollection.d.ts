/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DrinksProps } from "./Drinks";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type TeaCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => DrinksProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function TeaCollection(props: TeaCollectionProps): React.ReactElement;
