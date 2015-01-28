module.exports = ({ routes, route }) =>
  routes(require,
    route('app', '/', { dir: '' },
      route('home', '/',
        route('subRoute')
      )
    )
  );