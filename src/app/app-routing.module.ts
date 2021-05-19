import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SchedulePage } from './schedule/schedule.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    // children: [
    //   {
    //     path: 'schedule',
    //     // children: [
    //     //   {
    //     //     path: '',
    //         // loadChildren: () =>
    //         // import('./schedule/schedule.module').then(
    //         //   (m) => m.SchedulePageModule
    //         component: SchedulePage
    //         // ),
    //       // }
    //     // ]
    //   },
      // children: [
      //   {
      //     path: 'camera',
      //     loadChildren: () =>
      //       import('./camera/camera.module').then((m) => m.CameraPageModule),
      //   },
      //   {
      //     path: 'map',
      //     loadChildren: () =>
      //       import('./map/map.module').then((m) => m.MapPageModule),
      //   },
      //   {
      //     path: 'about',
      //     loadChildren: () =>
      //       import('./about/about.module').then((m) => m.AboutPageModule),
      //   },
      //   {
      //     path: 'schedule',
      //     loadChildren: () =>
      //       import('./schedule/schedule.module').then(
      //         (m) => m.SchedulePageModule
      //       ),
      //   },
      // ],

    // ]
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    // loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    // loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
