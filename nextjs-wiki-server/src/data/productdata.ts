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
      title: '모코코 장패드',
      description: `
      모모코 마우스 패드
      출처: https://lostark.game.onstove.com/Community/Free/Views/8307649?page=108&searchtype=0&searchtext=&ordertype=latest&category=0&communityNo=541
      `,
      category: 'pad',
      imageUrl:
        'https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/c48882abd8c143bb980017b638f7e773/9cadaa4be70b47a2b08d01f9ce78d3ae_1646918516.jpg',
      price: 35000,
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
      title: '소울이터 장패드',
      description: `
      소울이터 마우스 패드
      출처: https://lostark.game.onstove.com/Community/Free/Views/9677846?page=2&searchtype=0&searchtext=&ordertype=latest&category=0&communityNo=541
      `,
      category: 'pad',
      imageUrl:
        'https://d2x8kymwjom7h7.cloudfront.net/live/application_no/96001/default/COMMUNITY/20acf2fe88bc44d58f571f5ddbd1e15f/d3f725e51d4640829cb5d76fe7b3d840.jpg',
      price: 25000,
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
      title: '건슬링어 장패드1',
      description: `
      건슬링어 마우스 패드
      출처: https://lostark.game.onstove.com/Community/Free/Views/6754005?page=2289&searchtype=0&searchtext=&ordertype=latest&category=0&communityNo=541
      `,
      category: 'pad',
      imageUrl:
        'https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/b5804e6c9c7d40d380972e467c1e580e/cc9dd5c76a3f4303bbe0642ec2a768fc_1611994538.png',
      price: 34000,
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
      id: 43,
      title: '건슬링어 장패드2',
      description: `
      건슬링어 마우스 패드
      출처: https://lostark.game.onstove.com/Community/Free/Views/6754005?page=2289&searchtype=0&searchtext=&ordertype=latest&category=0&communityNo=541
      `,
      category: 'pad',
      imageUrl:
        'https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/0a05f24cc93148aea9e33fff59b1fbcd/d4065db693034884a86c57e7a6a045c2_1611994549.png',
      price: 20000,
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
      title: '바드 장패드',
      description: `
      바드 마우스 패드
      출처: https://lostark.game.onstove.com/Community/FanArt/Views/7413409?page=6&searchtype=0&searchtext=&ordertype=latest&category=0&communityNo=122541
      `,
      category: 'pad',
      imageUrl:
        'https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/6b1c877291864a4782c964c41fdf7239/5ff9c907db9947aca010def935c0c271_1627321757.jpg',
      price: 43000,
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
      title: '모코코 생일축하 장패드',
      description: `
      모코코 생일축하 마우스 패드
      출처: https://lostark.game.onstove.com/Community/FanArt/Views/7413409?page=6&searchtype=0&searchtext=&ordertype=latest&category=0&communityNo=122541
      `,
      category: 'pad',
      imageUrl:
        'https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/43ae2ad8771a46dfa927ba0628227311/a093d46107204e79a6edccab24571a6f_1649155528.png',
      price: 35000,
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
      title: '모코코 & 코니 장패드',
      description: `
      모코코 코니 마우스 패드
      출처: https://lostark.game.onstove.com/Community/Free/Views/9660757?page=4&searchtype=0&searchtext=&ordertype=latest&category=0&communityNo=541
      `,
      category: 'pad',
      imageUrl:
        'https://d2x8kymwjom7h7.cloudfront.net/live/application_no/96001/default/COMMUNITY/c2e5042748814b3cacb636047efe24b8/3d4fec3a96ff41ebb2a7f3fec4a6f7c1.jpg',
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
  ],
};

export default dummyProducts;
