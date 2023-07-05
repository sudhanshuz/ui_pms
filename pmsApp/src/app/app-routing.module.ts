import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './pages/doctor/doctor-dashboard/doctor-dashboard.component';
import { adminGuard } from './guards/admin.guard';
import { doctorGuard } from './guards/doctor.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ViewDrugsComponent } from './pages/drugs/view-drugs/view-drugs.component';
import { AddDrugsComponent } from './pages/drugs/add-drugs/add-drugs.component';
import { EditDrugsComponent } from './pages/drugs/edit-drugs/edit-drugs.component';
import { DeleteDrugsComponent } from './pages/drugs/delete-drugs/delete-drugs.component';
import { ViewSuppliersComponent } from './pages/suppliers/view-suppliers/view-suppliers.component';
import { OrdersComponent } from './pages/orders/orders/orders.component';
import { PickedUpOrdersComponent } from './pages/orders/picked-up-orders/picked-up-orders.component';
import { AddSuppliersComponent } from './pages/suppliers/add-suppliers/add-suppliers.component';
import { EditSuppliersComponent } from './pages/suppliers/edit-suppliers/edit-suppliers.component';
const routes: Routes = [
  {
    path: 'signup',
    component: SignUpComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'welcome',
    component:WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path:'admin',
    component:AdminDashboardComponent,
    canActivate:[adminGuard],
    children:[
      {path: 'profile',
      component: ProfileComponent,
      },
      {path: 'viewDrugs',
      component: ViewDrugsComponent,
      },
      {path: 'addDrugs',
      component: AddDrugsComponent,
      },
      {path: 'editDrugs/:drugName', 
      component: EditDrugsComponent,
      },
      {path: 'deleteDrugs',
      component: DeleteDrugsComponent,
      },
      {
        path: 'viewSuppliers',
        component: ViewSuppliersComponent,
      },
      {
        path: 'addSuppliers',
        component: AddSuppliersComponent,
      },
      {
        path: 'editSupplier/:supplierId',
        component:EditSuppliersComponent
      },
      {
        path: 'viewNewOrders',
        component:OrdersComponent
      },
      {
        path: 'viewPickedUpOrders',
        component:PickedUpOrdersComponent
      },
      {
        path:'',
        component:HomeComponent
      }
    ]
  },
  {
    path:'doctor',
    component:DoctorDashboardComponent,
    canActivate:[doctorGuard],
    children:[
      {path: 'profile',
      component: ProfileComponent,
      },
      {path: 'search',
      component: ViewDrugsComponent,
      },
      {
        path:'',
        component:HomeComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
