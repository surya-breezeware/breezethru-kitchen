/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react'
import { Snacks } from '../models'
import {
  getOverrideProps,
  useDataStoreBinding,
} from '@aws-amplify/ui-react/internal'
import { Collection } from '@aws-amplify/ui-react'
export default function TestNew(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props
  const itemsDataStore = useDataStoreBinding({
    type: 'collection',
    model: Snacks,
  }).items
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, 'TestNew')}
    >
      {(item, index) => (
        <Drinks
          Snack={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Drinks>
      )}
    </Collection>
  )
}
