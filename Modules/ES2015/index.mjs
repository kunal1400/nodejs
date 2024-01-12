/**
 * Ecmascript modules or ESM or ES Modules
 *
 * It is inbuilt mode from 2015
 */

// Importing named functions
import { ByeBatMan } from "./Batman.mjs";
import { ByeSuperMan } from "./Superman.mjs";

console.log(ByeBatMan());
console.log(ByeSuperMan());

// Importing default function
import GreetBatman from "./Batman.mjs";
import GreetSuperman from "./Superman.mjs";
console.log(GreetBatman());
console.log(GreetSuperman());
