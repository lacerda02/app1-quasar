const routes = [
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'), // Crie um layout separado para a tela de login, se necessário.
    children: [
      { path: '', component: () => import('pages/Login-form.vue') } // Rota de login
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/App.vue') }, // Rota principal
      { path: 'ajuda', component: () => import('pages/Ajuda.vue') },
      { path: 'helpdesk', component: () => import('pages/helpdesk.vue') },
      { path: 'form-helpdesk', component: () => import('pages/form-helpdesk.vue') },
      { path: 'galeria', component: () => import('pages/Galeria.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
