import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'tab1',
        children:[
          {
            path:'',
            loadChildren: 
             () =>
            import('../tab1/tab1.module').then(
              (m) => m.Tab1PageModule
            ),
          }
        ]
      },
      {
        path: 'tab3',
        children:[
          {
            path:'',
            loadChildren: 
             () =>
            import('../tab3/tab3.module').then(
              (m) => m.Tab3PageModule
            ),
            // loadChildren:'../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children:[
          {
            path:'',
            loadChildren: 
             () =>
            import('../tab2/tab2.module').then(
              (m) => m.Tab2PageModule
            ),
            // loadChildren:'../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path:'',
        redirectTo:'/tabs/tab1',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/tab1',
    pathMatch:'full'
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
