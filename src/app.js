import localforage from 'localforage';

const store = localforage.createInstance({
  name: 'database',
});

async function sayHelloAsync() {
  await store.setItem('name', 'Garrett');
  const name = await store.getItem('name');
  console.log(`Hello ${name}`);
}

sayHelloAsync();
