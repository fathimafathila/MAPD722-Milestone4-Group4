import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./pages/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'view-patient',
    loadChildren: () => import('./pages/view-patient/view-patient.module').then( m => m.ViewPatientPageModule)
  },
  {
    path: 'add-patient/:id',
    loadChildren: () => import('./pages/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'add-patient-record',
    loadChildren: () => import('./pages/add-patient-record/add-patient-record.module').then( m => m.AddPatientRecordPageModule)
  },
  {
    path: 'view-patient-record',
    loadChildren: () => import('./pages/view-patient-record/view-patient-record.module').then( m => m.ViewPatientRecordPageModule)
  },
  {
    path: 'view-patient-record/:id',
    loadChildren: () => import('./pages/view-patient-record/view-patient-record.module').then( m => m.ViewPatientRecordPageModule)
  },
  {
    path: 'view-all-patients',
    loadChildren: () => import('./pages/view-all-patients/view-all-patients.module').then( m => m.ViewAllPatientsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
