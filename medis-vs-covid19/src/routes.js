/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views_old/DashboardAnalytics';
import DashboardDefaultView from './views_old/DashboardDefault';
import OverviewView from './views_old/Overview';
import PresentationView from './views_old/Presentation';

export default [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('src/views/LP/LP'))
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/signup',
        exact: true,
        component: lazy(() => import('src/views/auth/signup'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('src/views_old/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('src/views_old/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('src/views_old/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/calendar',
        exact: true,
        component: lazy(() => import('src/views_old/Calendar'))
      },
      {
        path: '/changelog',
        exact: true,
        component: lazy(() => import('src/views_old/Changelog'))
      },
      {
        path: '/chat',
        exact: true,
        component: lazy(() => import('src/views_old/Chat'))
      },
      {
        path: '/chat/:id',
        exact: true,
        component: lazy(() => import('src/views_old/Chat'))
      },
      {
        path: '/components/buttons',
        exact: true,
        component: lazy(() => import('src/views_old/Buttons'))
      },
      {
        path: '/components/cards',
        exact: true,
        component: lazy(() => import('src/views_old/Cards'))
      },
      {
        path: '/components/chips',
        exact: true,
        component: lazy(() => import('src/views_old/Chips'))
      },
      {
        path: '/components/forms',
        exact: true,
        component: lazy(() => import('src/views_old/Forms'))
      },
      {
        path: '/components/lists',
        exact: true,
        component: lazy(() => import('src/views_old/Lists'))
      },
      {
        path: '/components/modals',
        exact: true,
        component: lazy(() => import('src/views_old/Modals'))
      },
      {
        path: '/components/typography',
        exact: true,
        component: lazy(() => import('src/views_old/Typography'))
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: DashboardAnalyticsView
      },
      {
        path: '/dashboards/default',
        exact: true,
        component: DashboardDefaultView
      },
      {
        path: '/invoices/:id',
        exact: true,
        component: lazy(() => import('src/views_old/InvoiceDetails'))
      },
      {
        path: '/kanban-board',
        exact: true,
        component: lazy(() => import('src/views_old/KanbanBoard'))
      },
      {
        path: '/mail',
        exact: true,
        component: lazy(() => import('src/views_old/Mail'))
      },
      {
        path: '/management/customers',
        exact: true,
        component: lazy(() => import('src/views_old/CustomerManagementList'))
      },
      {
        path: '/management/customers/:id',
        exact: true,
        component: lazy(() => import('src/views_old/CustomerManagementDetails'))
      },
      {
        path: '/management/customers/:id/:tab',
        exact: true,
        component: lazy(() => import('src/views_old/CustomerManagementDetails'))
      },
      {
        path: '/management/projects',
        exact: true,
        component: lazy(() => import('src/views_old/ProjectManagementList'))
      },
      {
        path: '/management/orders',
        exact: true,
        component: lazy(() => import('src/views_old/OrderManagementList'))
      },
      {
        path: '/management/orders/:id',
        exact: true,
        component: lazy(() => import('src/views_old/OrderManagementDetails'))
      },
      {
        path: '/overview',
        exact: true,
        component: OverviewView
      },
      {
        path: '/presentation',
        exact: true,
        component: PresentationView
      },
      {
        path: '/profile/:id',
        exact: true,
        component: lazy(() => import('src/views_old/Profile'))
      },
      {
        path: '/profile/:id/:tab',
        exact: true,
        component: lazy(() => import('src/views_old/Profile'))
      },
      {
        path: '/projects/create',
        exact: true,
        component: lazy(() => import('src/views_old/ProjectCreate'))
      },
      {
        path: '/projects/:id',
        exact: true,
        component: lazy(() => import('src/views_old/ProjectDetails'))
      },
      {
        path: '/projects/:id/:tab',
        exact: true,
        component: lazy(() => import('src/views_old/ProjectDetails'))
      },
      {
        path: '/projects',
        exact: true,
        component: lazy(() => import('src/views_old/ProjectList'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('src/views_old/Settings'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('src/views_old/Settings'))
      },
      {
        path: '/social-feed',
        exact: true,
        component: lazy(() => import('src/views_old/SocialFeed'))
      },
      {
        path: '/getting-started',
        exact: true,
        component: lazy(() => import('src/views_old/GettingStarted'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];
