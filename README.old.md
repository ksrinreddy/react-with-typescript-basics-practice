# react-with-typescript-basics-practice

learn and practice basics of using TypeScript to build a React app

# intro

learn to use typescript with react by building few components of varying complexity

## why typescript?

static type checking, helps to write more precise code

# getting started: create react app that is configured specifically for typescript

create a repo in github, clone to local machine, open the folder in vscode editor, open the terminal, initialize app in the same folder with create react app - typescript template using following command

npx create-react-app . --template typescript

the dot '.' in the command ensures to initilize create react app in the same folder you stationed in the terminal

# note the file extension

it is .tsx or .ts (not .jsx or .js)
remember to use .tsx or .ts file extensions while creating components or files to be able to work in typescript world

# typing props

learn to type basic props of components

# typing basic props

## typing string, number, boolean, object, array(of objects)

syntax, basic use case

## choosing between using type and interface

note: in the earlier days, suggestion was to use type when building applications and use interface when building libraries.
But according to the later releases of the typescript, there is hardly any difference between type and interface.

# typing advanced props

## union of string literals

ex: 'loading' | 'success' | 'error'

## children props

ex1: when child is a string
ex2: when child is another react component (react component prop type: React.ReactNode)

## optional props

add question mark at the end of the key name of the prop and before the colon to make it optional prop
ex: type test = {
id: number
keyname?: string
}

# typing event props

out of many event props, get familiar with most used events: click event on button, change event on input

## click event on button

type of click event on button: React.MouseEvent<HTMLButtonElement>

### handle click (case: does not need any parameter, does not return anything)

ex: making api call which does not have to accept a parameter or return a value; console.log()

### handle click (case: event as parameter, does not return anything)

### handle click (case: id as parameter, does not return anything)

## change event on input

type of change event on input: React.ChangeEvent<HTMLInputElement>

# type styles as props

type of styles(inline): React.CSSProperties

# tips related to props and types in react

- destructuring props while defining component
- exporting types (create them in sepearate file, export and import where it is needed)
- reusing types (extract types and use them in multiple places)

# typing hooks

learn typing react hooks

## typing useState hook

### type inference (initial value is assigned)

learn about type inference: type gets inferred based on the initial value set

### type useState hook when the initial value is none and only known at a future time

ex: user state value will be null before login or after logout, but can have some properties after login. type those properties using type and assign the generic union of both to useState.

### type assertion

ex: is useful when the user peroperties are available(non-null) as soon as the component mounts. in that case, user type is asserted using 'as' key word to user properties type

## typing useReducer hook

useState is good for simple state values. When state logic is complex where next state depends on previous state useReducer hook is preferrable.

### basic typing of useReducer hook

type state and action in reducer function, remaining will get auto type inference

### little more strict typing of useReducer

add little more restriction to type of action by using discriminated union to make it more precise typing.
Discriminated union is the recommended approach while typing useReducer hook.

## typing useContext (ContextAPI)

use case: while providing theme context to a component

### basic typing of useContext

ex: typing children and themecontextprovider.
works when context value is known initially.

use case: providing theme to a component

### typing useContext when context value is not known initially and only known in a future time

usecase: user authentication, user context.
initially user value will be null since not logged in, will have some props(AuthUser props) after login and null after logout.

## typing useRef

two cases: read only ref, mutable value

### typing read only useRef

for dom references specify dom element type
use case: while applying focus method on input when component mounts

### typing mutable useRef

for mutable references specify appropriate type
use case: while setting up a timer

# typing class component

use case: when you need to work with already existed class based components based code

# typing more advanced props

## pass a component as prop to another component, and type it

use case: passing Profile component as a prop to Private component and render profile component when user is loggedin, Login component(or page) when user is not logged in.
get familiar with typing private and profile components.

## generic props

use case: useful to specify generic type instead of absolute types when a prop accepts multiple types of variables.

ex: if a prop accepts an array of strings, or numbers, or objects etc, specify it with generic type <T> instead of absolute types string or number etc. This will allow to pass multiple types. Also you can restrict the generic type if needed.

## restricted props

type key word: never
use case: when a state can accept set of multiple values and when one of the values is assigned, other values should be disallowed.
ex: a number can take positive, negative, and zero values. when it is assigned positive, negative and zero states should be disallowed.
