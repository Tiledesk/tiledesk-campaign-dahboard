import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Channel {
  value: string;
  viewValue: string;
}

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss']
})
export class BroadcastComponent implements OnInit {

  selectedChannel: string = "all";
  selectedStatus: string = "all";

  channels: Channel[] = [
    {value: "all", viewValue: "All channels"},
    {value: "email", viewValue: "Email"},
    {value: "whatsapp", viewValue: "WhatsApp"},
    {value: "telegram", viewValue: "Telegram"},
  ]

  statuses: Status[] = [
    {value: "all", viewValue: "All statuses"},
    {value: "sent", viewValue: "Semt"},
    {value: "drafted", viewValue: "Drafted"},
    {value: "scheduled", viewValue: "Scheduled"},
  ]

  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  constructor() { }

  ngOnInit(): void {
  }

  createBroadcast() {
    console.log("create broadcast button clicked")
  }
}
