import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers: [DataService]
})
export class EInfoComponent implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  constructor(private dservice: DataService) { }

  ngOnInit(): void {
  }

  getInfofromService1(): void { this.infoReceived1 = this.dservice.getInfo1(); }
  getInfofromService2(): void { this.infoReceived2 = this.dservice.getInfo2(); }
  getInfofromService3(): void { this.infoReceived3 = this.dservice.getInfo3(); }

  updateInfo(frm: any): void
  {
    this.dservice.addInfo(frm.value.location);
  }
}
