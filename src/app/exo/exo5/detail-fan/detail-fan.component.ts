import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/shared/models/fan';
import { FanService } from 'src/app/shared/services/fan.service';

@Component({
  selector: 'app-detail-fan',
  templateUrl: './detail-fan.component.html',
  styleUrls: ['./detail-fan.component.scss']
})
export class DetailFanComponent implements OnInit {

  fanId : number;
  fan : Fan | undefined;

  constructor(private _activeRoute : ActivatedRoute, private _fanService : FanService) {
    this.fanId = parseInt(this._activeRoute.snapshot.params["id"]);
  }

  ngOnInit(): void {
      this.fan = this._fanService.getById(this.fanId);
  }

  //TODO : Mettre en place update et suppression
}
