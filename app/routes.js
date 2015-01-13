import { route, routes } from 'reapp-routes/react-router/generator';

module.exports = routes(require,
  route('app', '/', { dir: '' },
    route('home', '/',
      route('subRoute')
    )
  )
);