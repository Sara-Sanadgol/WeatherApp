export const createAnExample = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  });
};
