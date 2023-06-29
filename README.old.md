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

## typing string, number, boolean, object, array(of objects)

syntax, basic use case

## choosing between using type and interface

note: in the earlier days, suggestion was to use type when building applications and use interface when building libraries.
But according to the later releases of the typescript, there is hardly any difference between type and interface.
