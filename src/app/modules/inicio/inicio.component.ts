import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavRoute {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public misrutas: SideNavRoute[];

  constructor() { }

  ngOnInit() {
  }


}
