# parse-line



## What 

Simple package to explode a line.



## Why

Usually, I build a command-line app, and I need to parse the input to extract the command with its arguments separated by spaces. You may say `string.split(' ')`?, totally Nah!, Imagine we are having a discord bot that can handle `set-description <descriotion-with-spaces>`, and when someone invokes the command by `!set-description hello world`  or `!set-description "hello world"` with `string.split` the result will be `['!set-description', 'hello', 'world']` or `['!set-description', '"hello', 'world"']` and we want it to be `['!set-description', 'hello world']`. Tedious to solve it every time you make a bot in order to obtain a valid argument. So I built this package to help me avoiding repetitive implementation for the same problem, and I don't want to download big size generic use package in order to achieve this simple task.



## Installation

`npm install parse-line`  
or  
`yarn add parse-line`




## Example

input line: `say "hello world"`

```javascript
const {parseLine, ParseLineOptions} = require('parse-line');

const optionalOptions: ParseLineOptions = {};

console.log(parseLine('say "hello world"', optionalOptions))

//output: `['say', 'hello world']`
```


