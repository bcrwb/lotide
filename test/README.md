# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bcrwb/lotide`

**Require it:**

`const _ = require('@bcrwb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Head takes an array and returns the element at the first index.
* `tail(array)`: Tails takes an array and returns the element at the last index.
* `middle(array)`: Middle takes an array and returns the element at the middle index.
* `eqArrays(array,array2)`: EqArrays takes two arrays and returns true if they are identical and false if they are not.
* `assertEqual(actual,expected)`: AssertEqual takes two arguments and returns true if they are identical and false if they are not.
* `assertArrayEqual(array,array2)`: AssertArrayEqual takes two arrays and returns true if they are identical and false if they are not, makes viewing the result nicer.