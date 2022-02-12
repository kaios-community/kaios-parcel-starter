import localforage from 'localforage';
import { formatHelloMessage } from './helpers';

const store = localforage.createInstance({
  name: 'database',
});

async function sayHelloAsync() {
  await store.setItem('name', 'Garrett333');
  const name = await store.getItem('name');
  console.log(formatHelloMessage(name));
}

sayHelloAsync();
