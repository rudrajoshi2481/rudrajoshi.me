/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
          domains:["*"],
      },

      

}


module.exports = nextConfig
// module.exports = {
//   images: {
//       domains:"*",
//   },
// }


// module.exports = {
// webpack:(config,option) => {
//   config.module.rules.push({
//     test: /\.pdb$/, use: 'raw-loader'
//   })

//   return config
// }

// }