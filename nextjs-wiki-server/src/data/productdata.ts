import { Product } from '../entities/Product';

export interface ProductsData {
  products: Product[];
}

const dummyProducts: ProductsData = {
  products: [
    {
      id: 1,
      title: 'sample emoji 1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen emoji.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'emoji',
      imageUrl: '/products/emojis/emoji-1867195_1920.jpeg',
      price: 50000,
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
      title: 'sample emoji 2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen emoji.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'emoji',
      imageUrl: '/products/emojis/emoji-1283468_1920.jpeg',
      price: 10000,
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
      title: 'sample emoji 3',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen emoji.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'emoji',
      imageUrl: '/products/emojis/emoji-3510326_1920.jpeg',
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
      title: 'sample emoji 4',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen emoji.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'emoji',
      imageUrl: '/products/emojis/paper-3061485_1920.jpeg',
      price: 20000,
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
      title: 'sample emoji 5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen emoji.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'emoji',
      imageUrl: '/products/emojis/tea-time-3240766_1920.jpeg',
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
      id: 6,
      title: 'sample emoji 6',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen emoji.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'emoji',
      imageUrl: '/products/emojis/rashtravardhan-kataria.jpeg',
      price: 60000,
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
      title: 'sample figures 1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen emoji.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'figures',
      imageUrl: '/products/figures/blank-1886001_1920.png',
      price: 10000,
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
      title: 'sample figures 2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen emoji.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'figures',
      imageUrl: '/products/figures/black-shirts.jpeg',
      price: 20000,
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
      title: 'sample figures 3',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen emoji.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'figures',
      imageUrl: '/products/figures/blank-1886008_1920.png',
      price: 50000,
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
      title: 'sample figures 4',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'figures',
      imageUrl: '/products/figures/fashion-1283863_1920.jpeg',
      price: 20000,
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
      title: 'sample figures 5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'figures',
      imageUrl: '/products/figures/man-407095_1920.jpeg',
      price: 30000,
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
      title: 'sample figures 6',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: 'figures',
      imageUrl: '/products/figures/shirt-2878932_1920.jpeg',
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
