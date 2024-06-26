/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'cdn-lostark.game.onstove.com',
      'd3kxs6kpbh59hp.cloudfront.net',
      'd2x8kymwjom7h7.cloudfront.net',
      process.env.NEXT_PUBLIC_IMAGE,
    ],
  },
  compiler: (() => {
    let compilerConfig = {
      styledComponents: true,
    };

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // production환경에서 react-testing 라이브러리에서 사용하는 data-testid 속성 삭제
        reactRemoveProperties: { properties: ['^data-testid$'] },
      };
    }

    return compilerConfig;
  })(),
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ];
  },
};

module.exports = nextConfig;
