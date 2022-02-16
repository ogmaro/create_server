// Create a simple node application that has a POST, GET, PUT and DELETE endpoint,
// using express. The POST data should create new data, the GET endpoint should
// get the created or updated data as applicable, the PUT endpoint should UPDATE
// the data, and the DELETE endpoint should delete the data. No persistence is
// required. No Deployment is required.

import express, { Application, Request, Response } from 'express';
import { ParsedQs } from 'qs';

const app: Application = express();
let data: {
  name: string | ParsedQs | string[] | ParsedQs[] | undefined;
  age: string | ParsedQs | string[] | ParsedQs[] | undefined;
}[] = [
  {
    name: 'Patric',
    age: '30',
  },
];

app.get('/', (req: Request, res: Response) => {
  res.send(data);
});

app.post('/', async (req: Request, res: Response) => {
  const newData = {
    name: req.query.name,
    age: req.query.age,
  };
  data.push(newData);
  res.send(data);
});

app.put('/', (req: Request, res: Response) => {
  if (data[0].name === req.query.name) {
    const response = {
      message: 'user exist',
      data: data[0],
    };
    res.send(response);
  } else if (data[0].name !== req.query.name) {
    data[0].name = req.query.name;
    data[0].age = req.query.age;
    res.send(data);
  } else {
    res.send('Unknown error');
  }
});

app.delete('/', (req: Request, res: Response) => {
  if (data[0].name === req.query.name) {
    data.pop();
    res.send(data);
  } else {
    res.send('user not found');
  }
});

app.listen(3000, () => {
  console.log('listening again');
});
