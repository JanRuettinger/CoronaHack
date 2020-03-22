/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import AuthLayout from './layouts/Auth'
import LandingPage from './views/LandingPage'
import StudentLayout from './layouts/StudentDashboard'
import InstitutionLayout from './layouts/InstitutionDashboard'
import ErrorLayout from './layouts/Error'
// import DashboardAnalyticsView from './views_old/DashboardAnalytics'
// import DashboardDefaultView from './views_old/DashboardDefault'
// import OverviewView from './views_old/Overview'
// import PresentationView from './views_old/Presentation'

export default [
  {
    path: '/',
    exact: true,
    component: LandingPage
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/signup',
        exact: true,
        component: lazy(() => import('src/views/auth/Signup'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/',
    component: InstitutionLayout,
    routes: [
      {
        path: '/dashboard',
        exact: true,
        component: lazy(() => import('src/views/InstitutionDashboard'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/',
    component: StudentLayout,
    routes: [
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('src/views/StudentSettings'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },

  // {
  //   path: '/settings',
  //   component: Profile,
  //   routes: []
  // },
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
  }
]
