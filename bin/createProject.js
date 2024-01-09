#!/usr/bin/env node
const { askProjectName } = require('../dist/index.js');
askProjectName(process.argv[2]);
