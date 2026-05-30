import type { PostType } from '../components/post/Post';

export const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/oliveirafullstack.png',
      name: 'OliveiraFullstack',
      role: 'Fullstack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera 🖖' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu Portfolio  🖖',
      },
      {
        type: 'link',
        href: 'https://www.ofs.dev.br',
        content: 'oliveirafullstack/ofs-ignite',
      },
    ],
    publishedAt: new Date('2025-08-29 20:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/emmanuelmarcosdeoliveira.png',
      name: 'Emmanuel Oliveira',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera 🖖' },
      {
        type: 'paragraph',
        content:
          'Dá uma olhada 🧐 nesse novo Projeto que inseri no meu Portfolio',
      },
      {
        type: 'link',
        href: 'https://www.ofs.dev.br',
        content: 'emmanuelmarcosdeoliveira/ofs-ignite',
      },
    ],
    publishedAt: new Date('2025-07-03 20:00'),
  },
];
