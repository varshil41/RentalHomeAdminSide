import adminDashboard from '../view/admin/dashboard'
import adminLoginPage from '../view/admin/adminLoginPage'
import adminForgotPwd from '../view/admin/adminForgotPwd'
import adminManageUsers from '../view/admin/manageUsers'
import adminFeedback from '../view/admin/feedback'
import adminProfile from '../view/admin/adminProfile'
import adminManageAppointments from '../view/admin/manageAppointments'
import adminManageProperties from '../view/admin/manageProperties'
import adminPropertyDetails from '../view/admin/propertyDetails'

export default
  [
    {
      path: '/',
      name: 'adminLoginPage',
      component: adminLoginPage
    },
    {
      path: '/home',
      name: 'adminHome',
      component: adminDashboard
    },
    {
      path: '/properties',
      name: 'adminManageProperties',
      component: adminManageProperties
    },
    {
      path: '/properties/:id',
      name: 'adminPropertyDetails',
      component: adminPropertyDetails
    },
    {
      path: '/forgotpwd',
      name: 'adminForgotPwd',
      component: adminForgotPwd
    },
    {
      path: '/clients',
      name: 'adminManageUsers',
      component: adminManageUsers
    },
    {
      path: '/feedback',
      name: 'adminFeedback',
      component: adminFeedback
    },
    {
      path: '/profile',
      name: 'adminProfile',
      component: adminProfile
    },
    {
      path: '/appointment',
      name: 'adminManageAppoitment',
      component: adminManageAppointments
    }
  ]
