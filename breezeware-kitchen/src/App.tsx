import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { EditProfile, NavBar } from './ui-components'
// import { DrinksCollectionDemo } from './ui-components'
// import { HotDrinks } from './ui-components'
// import { TestNew } from './ui-components'
// import { DrinksCollection } from './ui-components'
import { TeaCollection } from './ui-components'
import { SnackCollection } from './ui-components'
import {
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react'
import { NewCollection } from './ui-components'

function App({ user, signOut }: any) {
  const [quantity, setQuantity] = useState(0)
  const [edit, setEdit] = useState<boolean>(false)
  const [updatedDrink, setUpdateDrink] = useState()
  const [instruction, setInstruction] = useState<string>()
  const [image, setImage] = useState<string>()
  return (
    <div className="App">
      <NavBar
        width="100%"
        position="fixed"
        style={{ zIndex: +1 }}
        overrides={{
          image: {
            onClick: () => {
              signOut()
            },

            // alert('sdfsd')
          },
        }}
      />
      <header className="App-header">
        <h1>Snacks</h1>
        <SnackCollection />

        {/* <DrinksCollection /> */}
      </header>
      <div className="App-body">
        <h1>Drinks</h1>
        {edit && (
          <EditProfile
            // Test={updatedDrink}
            prop={updatedDrink}
            overrides={{
              TextField29766922: {
                placeholder: quantity,
              },
              image: {
                src: image,
              },
              TextField29766923: {
                placeholder: instruction,
              },
            }}
          />
        )}
        <NewCollection
          overrideItems={({ item, index }) => ({
            overrides: {
              //     'akar-icons:circle-plus': {
              //       onClick: () => {
              //         // item.image = {
              //         //   src:
              //         //     'https://breezethru.dynamostack.com/static/media/BreezethuruLogo.d330b8e56570ee15a105.png',
              //         // }
              //         // item.Quantity = 2
              //         // setQuantity(quantity + 1)
              //         item.quantity = 5
              //       },
              //       style: {
              //         cursor: 'pointer',
              //       },
              //     },
              //     'ant-design:minus-circle-outlined': {
              //       onClick: () => {
              //         setQuantity(quantity - 1)
              //       },
              //       style: {
              //         cursor: 'pointer',
              //       },
              //     },
              Quantity: {
                // children: quantity,
                onClick: () => {
                  setUpdateDrink(item)
                  setEdit(!edit)
                  setImage(item.image)
                  setInstruction(item.instruction)
                  setQuantity(item.quantity)
                },
              },
            },
          })}
        />
      </div>
    </div>
  )
}

export default withAuthenticator(App)
