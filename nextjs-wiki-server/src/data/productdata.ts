import { Product } from '../entities/Product';

export interface ProductsData {
  products: Product[];
}

const dummyProducts: ProductsData = {
  products: [
    {
      id: 1,
      title: '기분좋은 향기',
      description: `
        모코코 이모티콘: 기분좋은 향기가 싹 도노
        출처: https://lostark.game.onstove.com/ContestBoard/Views/237?page=1&boardType=100&parentNo=3&category=3&searchtype=0&searchtext=&ordertype=latest
        `,
      category: 'emoji',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2021/03/26/637523259763204055.png',
      price: 1000,
      condition: 'new',
      owner: {
        id: 1,
        username: 'hana',
        displayName: 'Hana Kim',
        email: 'hana.kim@example.com',
        profileImageUrl: '/users/1.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 2,
      title: '모코~ 코~',
      description: `
      모코코 이모티콘: 모코~ 코~
      출처: https://lostark.game.onstove.com/ContestBoard/Views/237?page=1&boardType=100&parentNo=3&category=3&searchtype=0&searchtext=&ordertype=latest
      `,
      category: 'emoji',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2021/03/26/637523259673627150.png',
      price: 1000,
      condition: 'new',
      owner: {
        id: 1,
        username: 'hana',
        displayName: 'Hana Kim',
        email: 'hana.kim@example.com',
        profileImageUrl: '/users/1.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 3,
      title: '전사 직업 이모티콘',
      description: `
        전사 이모티콘 모음
        출처: https://lostark.game.onstove.com/ContestBoard/Views/13?page=1&boardType=100&parentNo=3&category=3&searchtype=2&searchtext=%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98&ordertype=latest
        `,
      category: 'emoji',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2021/03/24/637521769547904513.png',
      price: 5000,
      condition: 'used',
      owner: {
        id: 1,
        username: 'hana',
        displayName: 'Hana Kim',
        email: 'hana.kim@example.com',
        profileImageUrl: '/users/1.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 4,
      title: '무도가 직업 이모티콘',
      description: `
      무도가 이모티콘 모음
      출처: https://lostark.game.onstove.com/ContestBoard/Views/13?page=1&boardType=100&parentNo=3&category=3&searchtype=2&searchtext=%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98&ordertype=latest
      `,
      category: 'emoji',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2021/03/24/637521769634226666.png',
      price: 5000,
      condition: 'new',
      owner: {
        id: 1,
        username: 'hana',
        displayName: 'Hana Kim',
        email: 'hana.kim@example.com',
        profileImageUrl: '/users/1.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 5,
      title: '마법사 직업 이모티콘',
      description: `
      마법사 이모티콘 모음
      출처: https://lostark.game.onstove.com/ContestBoard/Views/13?page=1&boardType=100&parentNo=3&category=3&searchtype=2&searchtext=%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98&ordertype=latest
      `,
      category: 'emoji',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2021/03/24/637521870499456172.png',
      price: 5000,
      condition: 'new',
      owner: {
        id: 3,
        username: 'jinho',
        displayName: 'Jinho Yoon',
        email: 'jinho.yoon@example.com',
        profileImageUrl: '/users/3.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 6,
      title: '암살자 직업 이모티콘',
      description: `
      암살자 이모티콘 모음
      출처: https://lostark.game.onstove.com/ContestBoard/Views/13?page=1&boardType=100&parentNo=3&category=3&searchtype=2&searchtext=%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98&ordertype=latest
      `,
      category: 'emoji',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2021/03/24/637521770196252283.png',
      price: 5000,
      condition: 'used',
      owner: {
        id: 3,
        username: 'jinho',
        displayName: 'Jinho Yoon',
        email: 'jinho.yoon@example.com',
        profileImageUrl: '/users/3.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 6,
      title: '헌터 직업 이모티콘',
      description: `
      헌터 이모티콘 모음
      출처: https://lostark.game.onstove.com/ContestBoard/Views/13?page=1&boardType=100&parentNo=3&category=3&searchtype=2&searchtext=%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98&ordertype=latest
      `,
      category: 'emoji',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2021/03/24/637521772554203181.png',
      price: 5000,
      condition: 'used',
      owner: {
        id: 3,
        username: 'jinho',
        displayName: 'Jinho Yoon',
        email: 'jinho.yoon@example.com',
        profileImageUrl: '/users/3.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 6,
      title: '젠더락 직업 이모티콘',
      description: `
      젠더락 이모티콘 모음
      출처: https://lostark.game.onstove.com/ContestBoard/Views/13?page=1&boardType=100&parentNo=3&category=3&searchtype=2&searchtext=%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98&ordertype=latest
      `,
      category: 'emoji',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2021/03/24/637521770426526918.png',
      price: 5000,
      condition: 'used',
      owner: {
        id: 3,
        username: 'jinho',
        displayName: 'Jinho Yoon',
        email: 'jinho.yoon@example.com',
        profileImageUrl: '/users/3.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 20,
      title: '군단장: 발탄',
      description: `
      군단장: 발탄 피규어
      출처: https://lostark.game.onstove.com/ContestBoard/Views/3152?page=1&boardType=102&parentNo=3&category=0&searchtype=0&searchtext=&ordertype=random
      `,
      category: 'figures',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2022/09/06/637980258298638090.png',
      price: 50000,
      condition: 'used',
      owner: {
        id: 1,
        username: 'hana',
        displayName: 'Hana Kim',
        email: 'hana.kim@example.com',
        profileImageUrl: '/users/1.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 21,
      title: '군단장: 일리아칸',
      description: `
      군단장: 일리아칸 피규어
      출처: https://lostark.game.onstove.com/ContestBoard/Views/3067?page=1&boardType=102&parentNo=3&category=0&searchtype=0&searchtext=&ordertype=random
      `,
      category: 'figures',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2022/09/03/637978442200709196.jpg',
      price: 50000,
      condition: 'used',
      owner: {
        id: 1,
        username: 'hana',
        displayName: 'Hana Kim',
        email: 'hana.kim@example.com',
        profileImageUrl: '/users/1.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 22,
      title: '가디언: 칼엘리고스',
      description: `
      가디언: 칼엘리고스 피규어
      출처: https://lostark.game.onstove.com/ContestBoard/Views/2943?page=2&boardType=102&parentNo=3&category=0&searchtype=2&searchtext=%ED%94%BC%EA%B7%9C%EC%96%B4&ordertype=random
      `,
      category: 'figures',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2022/08/29/637973814827035564.jpg',
      price: 25000,
      condition: 'new',
      owner: {
        id: 1,
        username: 'hana',
        displayName: 'Hana Kim',
        email: 'hana.kim@example.com',
        profileImageUrl: '/users/1.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 23,
      title: '군단장: 아브렐슈드',
      description: `
      군단장: 아브렐슈드 피규어
      출처: https://lostark.game.onstove.com/ContestBoard/Views/851?page=15&boardType=100&parentNo=3&category=0&searchtype=0&searchtext=&ordertype=latest
      `,
      category: 'figures',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2021/04/04/637531619661243339.jpg',
      price: 60000,
      condition: 'new',
      owner: {
        id: 2,
        username: 'eunyoung',
        displayName: 'Eunyoung Ha',
        email: 'eunyoung.ha@example.com',
        profileImageUrl: '/users/2.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 24,
      title: '디스트로이어',
      description: `
      디스트로이어 피규어
      출처: https://lostark.game.onstove.com/Community/FanArt/Views/3265185?page=1&searchtype=0&searchtext=&ordertype=latest&category=0&communityNo=1225
      `,
      category: 'figures',
      imageUrl:
        'https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/572ca9168c4c48fb989e35d2727d7628/3581ea6a0e6f41feb7110a78b4134284_1559386749.jpg',
      price: 100000,
      condition: 'new',
      owner: {
        id: 2,
        username: 'eunyoung',
        displayName: 'Eunyoung Ha',
        email: 'eunyoung.ha@example.com',
        profileImageUrl: '/users/2.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 25,
      title: '에스더: 니나브',
      description: `
      에스더: 니나브 피규어
      출처: https://lostark.game.onstove.com/ContestBoard/Views/3060
      `,
      category: 'figures',
      imageUrl:
        'https://cdn-lostark.game.onstove.com/uploadfiles/user/2022/09/03/637978341991669715.jpg',
      price: 30000,
      condition: 'new',
      owner: {
        id: 3,
        username: 'jinho',
        displayName: 'Jinho Yoon',
        email: 'jinho.yoon@example.com',
        profileImageUrl: '/users/3.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 40,
      title: 'sample pad 1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'pad',
      imageUrl: '/products/pad/baby-pad-505471_1920.jpeg',
      price: 60000,
      condition: 'new',
      owner: {
        id: 1,
        username: 'hana',
        displayName: 'Hana Kim',
        email: 'hana.kim@example.com',
        profileImageUrl: '/users/1.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 41,
      title: 'sample pad 2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'pad',
      imageUrl: '/products/pad/belt-952834_1920.jpeg',
      price: 120000,
      condition: 'used',
      owner: {
        id: 1,
        username: 'hana',
        displayName: 'Hana Kim',
        email: 'hana.kim@example.com',
        profileImageUrl: '/users/1.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 42,
      title: 'sample pad 3',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'pad',
      imageUrl: '/products/pad/boots-181744_1280.jpeg',
      price: 100000,
      condition: 'used',
      owner: {
        id: 2,
        username: 'eunyoung',
        displayName: 'Eunyoung Ha',
        email: 'eunyoung.ha@example.com',
        profileImageUrl: '/users/2.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 43,
      title: 'sample pad 4',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'pad',
      imageUrl: '/products/pad/brown-pad-1150071_1920.jpeg',
      price: 70000,
      condition: 'used',
      owner: {
        id: 2,
        username: 'eunyoung',
        displayName: 'Eunyoung Ha',
        email: 'eunyoung.ha@example.com',
        profileImageUrl: '/users/2.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 44,
      title: 'sample pad 5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'pad',
      imageUrl: '/products/pad/feet-1840619_1920.jpeg',
      price: 90000,
      condition: 'new',
      owner: {
        id: 3,
        username: 'jinho',
        displayName: 'Jinho Yoon',
        email: 'jinho.yoon@example.com',
        profileImageUrl: '/users/3.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 45,
      title: 'sample pad 6',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'pad',
      imageUrl: '/products/pad/pad-1433925_1920.jpeg',
      price: 70000,
      condition: 'new',
      owner: {
        id: 3,
        username: 'jinho',
        displayName: 'Jinho Yoon',
        email: 'jinho.yoon@example.com',
        profileImageUrl: '/users/3.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 46,
      title: 'sample pad 7',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'pad',
      imageUrl: '/products/pad/pad-2216498_1920.jpeg',
      price: 20000,
      condition: 'new',
      owner: {
        id: 3,
        username: 'jinho',
        displayName: 'Jinho Yoon',
        email: 'jinho.yoon@example.com',
        profileImageUrl: '/users/3.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
    {
      id: 47,
      title: 'sample pad 8',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'pad',
      imageUrl: '/products/pad/pad-153310_1280.png',
      price: 60000,
      condition: 'new',
      owner: {
        id: 3,
        username: 'jinho',
        displayName: 'Jinho Yoon',
        email: 'jinho.yoon@example.com',
        profileImageUrl: '/users/3.png',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    },
  ],
};

export default dummyProducts;
