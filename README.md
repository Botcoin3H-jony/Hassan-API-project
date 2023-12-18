# JARiF npm Project

[![npm version](https://badge.fury.io/js/jarif-api.svg)](https://www.npmjs.com/package/jarif-api)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

A Node.js package for interacting with Vyturex APIs.

## Examples of a code

```
const jarifapi = require('jarif-api');

async function test() {
  try {
    const pgen = await jarifapi.promptgen('cat');
    console.log(pgen);
  } catch (error) {
    console.error(error);
  }
}

test();

```

## Available APIs
1. GPT
2. LLAMA 2
3. VICUNA AI 
4. SDXL 
5. SONG FINDER
6. EMOJIGIF
7. MR BEAST VOICE CLONER 
and 4+

** all the APIs u can test via test.js command **

## Installation

Install the package using npm:

```bash
npm install jarif-api
