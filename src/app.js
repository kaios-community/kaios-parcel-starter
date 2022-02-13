import { formatHelloMessage } from './helpers';

async function sayHelloAsync() {
  const name = await Promise.resolve('Garrett');
  console.log(formatHelloMessage(name));
}

sayHelloAsync();
