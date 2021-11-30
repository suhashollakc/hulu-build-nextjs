 module.exports = {
  reactStrictMode: true,
  images:{
    domains: ["links.papareact.com","image.tmdb.org","cdn.arstechnica.net","img1.hulu.com"],
  },
  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }

  //   return config
  // }
};
