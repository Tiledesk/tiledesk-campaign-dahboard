import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SegmentsComponent } from './segments/segments.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'broadcast', component: BroadcastComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'segments', component: SegmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
