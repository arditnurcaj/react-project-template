import { rest } from 'msw';

const handlers = [
  rest.get('/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json('Hello World!'));
  }),
];

export default handlers;
