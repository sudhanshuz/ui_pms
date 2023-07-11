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
import { PlaceOrderComponent } from './pages/orders/place-order/place-order.component';
import { WaitComponent } from './pages/orders/wait/wait.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { ViewReportsComponent } from './pages/sales/view-reports/view-reports.component';
import { TodayReportComponent } from './pages/sales/today-report/today-report.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { SupplierPickupComponent } from './pages/suppliers/supplier-pickup/supplier-pickup.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
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
    path:'image',
    component:ImageUploadComponent,
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
        path: 'viewReports',
        component:ViewReportsComponent
      },
      {
        path: 'todayReport',
        component:TodayReportComponent
      },
      {
        path: 'supplierPickup',
        component:SupplierPickupComponent
      },
      {
        path: 'editUser/:userId',
        component:EditUserComponent
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
      {path: 'placeOrder/:drugName',
      component:PlaceOrderComponent,
      },
      {path: 'wait/:orderId',
      component:WaitComponent,
      },
      {path: 'pay/:orderId',
      component:PaymentComponent,
      },
      {path: 'myOrder/:fullName',
      component:MyOrdersComponent,
      },
      {
        path: 'editUser/:userId',
        component:EditUserComponent
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
