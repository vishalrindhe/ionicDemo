import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  // { 
  //   path: '', 
  //   component: HomePage 
  // },
  {
    path: '',
    component: HomePage,
    children: [
      // {
      //   path: 'schedule',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: 
      //        () =>
      //       import('../schedule/schedule.module').then(
      //         (m) => m.SchedulePageModule
      //       ),
      //     }
      //   ]
      // },
      {
        path: 'camera',
        loadChildren: () =>
          import('../camera/camera.module').then((m) => m.CameraPageModule),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('../map/map.module').then((m) => m.MapPageModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutPageModule),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('../schedule/schedule.module').then(
            (m) => m.SchedulePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/home/schedule',
        pathMatch: 'full'
      }
    ],
  },
  // {
  //   path: '',
  //   redirectTo: '/home/schedule',
  //   pathMatch: 'full',
  //   // loadChildren: () =>
  //   //       import('../schedule/schedule.module').then(
  //   //         (m) => m.SchedulePageModule
  //   //       ),
  // },
  {
    path: '',
    redirectTo: '/home/schedule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
