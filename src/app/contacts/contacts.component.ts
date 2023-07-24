import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LeadService } from '../services/lead.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  contacts = [];
  displayedColumns: string[] = ['name', 'email', 'channel', 'phone', 'created_at'];
  dataSource: any;

  // TO DELETE !!!!
  project_id: string = "62c3f10152dc7400352bab0d";

  constructor(
    private leadService: LeadService
  ) { }

  ngOnInit(): void {
    this.getContacts()
  }

  ngAfterViewInit() {
    
  }

  getContacts() {
    this.leadService.getLeadsActive(this.project_id).then((res: any) => {
      this.contacts = res.leads;
      this.contacts.map(c => c.checked = false);
      console.log("Contacts: ", this.contacts);
      this.addMissingParamsTemp();
      this.dataSource = new MatTableDataSource<any>(this.contacts);
      this.dataSource.paginator = this.paginator;
    }).catch((err) => {
      console.log("getLeadsActive error: ", err);
    })
  }

  addMissingParamsTemp() {

    this.contacts.forEach((contact) => {
      if (contact.lead_id.includes('wab')) {
        contact.channel = 'whatsapp';
        contact.phone = contact.lead_id.substring(5)
      }
      else if (contact.lead_id.includes('fbm')) {
        contact.channel = 'messenger';
      }
      else if (contact.lead_id.includes('telegram')) {
        contact.channel = 'telegram';
      }
      else {
        contact.channel = "native"
      }

    })
    console.log("addMissingParamsTemp contact: ", this.contacts)
  }

}
