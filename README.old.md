# react-with-typescript-basics-practice

learn and practice basics of using TypeScript to build a React app

# intro

learn to use typescript with react by building few components of varying complexity

## why typescript?

static type checking, helps to write more precise code

# getting started: create react app that is configured specifically for typescript

create a repo in github, clone to local machine, open the folder in vscode editor, open the terminal, initialize app in the same folder with create react app - typescript template using following code

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
