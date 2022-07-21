import {setArray, getArray} from '@/example-a';
import {setStaticArray, getStaticArray} from '@/example-b';

const foo = ['A', 'B', 'C'];
console.log('Expected array: ', foo);

// Not working
setArray(foo);
console.log('Array stored in file: ', getArray());

// Working
setStaticArray(foo);
console.log('Array stored in singleton class: ', getStaticArray());
