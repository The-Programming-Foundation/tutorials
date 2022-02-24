
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','909'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','af1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/domain_languages/sql/',
        component: ComponentCreator('/domain_languages/sql/','7e0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/domain_languages/sql/introduction',
        component: ComponentCreator('/domain_languages/sql/introduction','603'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/getting_started/intro_data_science/',
        component: ComponentCreator('/getting_started/intro_data_science/','115'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/getting_started/intro_data_science/module1',
        component: ComponentCreator('/getting_started/intro_data_science/module1','0eb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/getting_started/intro_data_science/module2',
        component: ComponentCreator('/getting_started/intro_data_science/module2','c78'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/getting_started/intro_data_science/module3',
        component: ComponentCreator('/getting_started/intro_data_science/module3','939'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/getting_started/intro_data_science/module4',
        component: ComponentCreator('/getting_started/intro_data_science/module4','c0c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/logic/binaries',
        component: ComponentCreator('/logic/binaries','778'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/logic/gates',
        component: ComponentCreator('/logic/gates','7fc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/os/kernel/introduction',
        component: ComponentCreator('/os/kernel/introduction','46f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/os/unix/',
        component: ComponentCreator('/os/unix/','940'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/os/unix/File Structure',
        component: ComponentCreator('/os/unix/File Structure','d5e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/os/unix/Shell',
        component: ComponentCreator('/os/unix/Shell','e14'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/os/unix/Structure',
        component: ComponentCreator('/os/unix/Structure','974'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/os/vim/introduction',
        component: ComponentCreator('/os/vim/introduction','7d2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/algorithm/',
        component: ComponentCreator('/programming/algorithm/','3bb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/algorithm/introduction',
        component: ComponentCreator('/programming/algorithm/introduction','7a5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/c/',
        component: ComponentCreator('/programming/c/','08a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/c/calculation',
        component: ComponentCreator('/programming/c/calculation','bc2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/c/expansion',
        component: ComponentCreator('/programming/c/expansion','909'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/c/hello-earth',
        component: ComponentCreator('/programming/c/hello-earth','5be'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/c/structure',
        component: ComponentCreator('/programming/c/structure','178'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/oop/',
        component: ComponentCreator('/programming/oop/','8ab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/oop/abstraction',
        component: ComponentCreator('/programming/oop/abstraction','367'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/oop/encapsulation',
        component: ComponentCreator('/programming/oop/encapsulation','3cd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/oop/inheritance',
        component: ComponentCreator('/programming/oop/inheritance','1f9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/oop/polymorphism',
        component: ComponentCreator('/programming/oop/polymorphism','b06'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/python/',
        component: ComponentCreator('/programming/python/','0bf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/python/calculation',
        component: ComponentCreator('/programming/python/calculation','f33'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/python/conditional-statements',
        component: ComponentCreator('/programming/python/conditional-statements','b91'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/python/file-handling',
        component: ComponentCreator('/programming/python/file-handling','396'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/python/functions',
        component: ComponentCreator('/programming/python/functions','ddb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/python/hello-earth',
        component: ComponentCreator('/programming/python/hello-earth','6dc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/python/loops',
        component: ComponentCreator('/programming/python/loops','ffb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming/python/structure',
        component: ComponentCreator('/programming/python/structure','173'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
