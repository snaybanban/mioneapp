import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';
import { Lugar } from './lugar.models';

@Component({
  selector: 'app-lugar-detail',
  templateUrl: './lugar-detail.page.html',
  styleUrls: ['./lugar-detail.page.scss'],
})
export class LugarDetailPage implements OnInit {

  place: Lugar;

  constructor(private ActivatedRoute: ActivatedRoute, private placesService:
    PlacesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe(paramMap => {
      //if (!paramMap.has('lugarId')) {
      //return;
      //}
      const recipeId = paramMap.get('placeId');
      this.place = this.placesService.getplace(recipeId);
    })
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: 'Desea borrar el contenido?',
      message: 'Esta acción no se puede deshacer',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          }
        }
      ]
    });
    await alertElement.present();
  }
}
