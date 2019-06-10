const users = [{
  id: '1',
  name: 'Brandon',
  email: 'example@email.com',
  age: 31
},
{
  id: '2',
  name: 'Joe',
  email: 'example@email.com',
  age: 31
},
{
  id: '3',
  name: 'Sarah',
  email: 'example@email.com'
}];

const posts = [{
  id: '4',
  title: 'Post Title 1',
  body: 'Post Body 1',
  published: true,
  author: '1'
},
{
  id: '5',
  title: 'Post Title 2',
  body: 'Post Body 1',
  published: false,
  author: '2'
},
{
  id: '6',
  title: 'Post Title 3',
  body: 'Post Body 3',
  published: true,
  author: '3'
}];

const comments =[{
  id: '7',
  text: 'comment text 1',
  author: '1',
  post: '4'
},
{
  id: '8',
  text: 'comment text 2',
  author: '1',
  post: '4'
},
{
  id: '9',
  text: 'comment text 3',
  author: '3',
  post: '5'
},
{
  id: '10',
  text: 'comment text 4',
  author: '2',
  post: '6'
}]

const db = {
  users,
  posts,
  comments
}

export { db as default }