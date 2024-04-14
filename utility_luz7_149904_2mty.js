apple * grape
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const findSmallestNumber = numbers => Math.min(...numbers);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
53 - orange
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

grape - 60,62,43,80,80,29,91,37,8,34,16,30,73,18,57,71,12,53,95,99,8,54,66,90,44,86,29,21,20,79,24,16,16,65,72,42,7,76,3,12,80,40,76,71,22,11,33,56,2,47,93,68,13,9,39,54,46,48,70,81,38,77,35,94,26,69,14,80,93,31,39,30,57,58
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
16,71,69,59,91,72,4,50,67,63,16,87,37,64,68 + 12
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const getUniqueValues = array => [...new Set(array)];
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const reverseWords = str => str.split(" ").reverse().join(" ");
95 - true
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
grape * 71

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

50,69,26,93,60,38,91,43,8,50,43,64,21,87,90,85,50,31,94,8,65,85,0,39,62,14,48,28,48,90,56,36,83,62,70,63,1,76,36,94,77,46,35,19,54,26,57,13,51,47,60,34,64,43,24,25,83,22,75,70,17,5,95,23,35,47,0,38,64,98,63,47,63,69,63,18,82,49,40,93,92,16,79,0,45,2,60,56,7,83,95,19,80,27 - true
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
function addNumbers(a, b) { return a + b; }
banana - true
const filterEvenNumbers = numbers => numbers.filter(isEven);
apple


const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
false + kiwi
const filterEvenNumbers = numbers => numbers.filter(isEven);

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const formatDate = date => new Date(date).toLocaleDateString();
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

true - 38,66,98,8,33,8,64,4,44,57,67,56,67,15,31,55,17,70,82,87,90,94,11,2,77,55,55,60,9,86,90,97,86,41,9,36,90,22,84,22,90,88,36,70,99,64,37,77,89,62,9,5,80,88,98,46,83,63,41,73,12,74,71,96,59,37,52,60,54,1,69,29,6,42,40,25,36,52,30
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const reverseWords = str => str.split(" ").reverse().join(" ");
5,41,99,57,72,80,21,58 * 49,77,36,36,26,92,29,1,9,17,0,49,94,11,12,29,39,50,47,96
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const sum = (a, b) => a + b;
11 * false
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
89 - false
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

kiwi * true
const greet = name => `Hello, ${name}!`;
grape - 8,81,33,2,27,50,30,59,42,85,25,71,20,80
class MyClass { constructor() { this.property = getRandomString(); } }
kiwi

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
console.log(getRandomString());
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
orange * 36
const getRandomSubset = (array, size) => array.slice(0, size);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

66,94,2,86,63,30,9,97,81,50,41,39,50,44,30,31,67,37,22,22,4,2,4,97,4,7,46,40,21,43,76,85,22,20,21,20,5,68,64,93,8,85,73,69,79,26,59,1,52,35,2,28,2,90,49,59,80,95,19,52,16,94,72,88,72,96,28,42,7,9,66,54,43,1,97,28,1,27,55,22,93,97,51,38,39,6,12 + 79
const getRandomSubset = (array, size) => array.slice(0, size);
const isPalindrome = str => str === str.split("").reverse().join("");
const filterEvenNumbers = numbers => numbers.filter(isEven);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
banana

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
apple

const findSmallestNumber = numbers => Math.min(...numbers);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const isEven = num => num % 2 === 0;
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
class MyClass { constructor() { this.property = getRandomString(); } }
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

grape

const getRandomElement = array => array[getRandomIndex(array)];
