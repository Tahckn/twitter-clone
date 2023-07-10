/** @type {import('next').NextConfig} */
const nextConfig = {
   images:{
    domains:[
        'bitcoinmagazine.com'
    ],
    remotePatterns:[
        {
            protocol:'https',
            hostname:'**'
        }
    ]
   }
}

module.exports = nextConfig
