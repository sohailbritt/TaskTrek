import { createContext } from 'react';

// Create the context
const taskTrekContext = createContext(null);
const userContext = createContext(null);

console.log(taskTrekContext); // Now it's safe
export { taskTrekContext, userContext };

