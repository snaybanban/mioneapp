import { Injectable } from '@angular/core';
import { Lugar } from './lugar-detail/lugar.models'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Lugar[] = [
    {
      id: '1',
      title: 'Catedral de Granada',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Catedral_de_Granada%2C_Nicaragua.jpg',
      Comments: ['Muy bonita y colorida']
    },
    {
      id: '2',
      title: 'Volcan Mombacho',
      imageURL: 'https://assets.cdnelnuevodiario.com/cache/68/dd/68ddcdaa85f11af12494b4a2a58d7e49.jpg',
      Comments: []
    },
    {
      id: '3',
      title: 'Catedral de Leon',
      imageURL: 'https://tiemposdenegocios.com/wp-content/uploads/2019/06/leon.jpg',
      Comments: ['La mas hermosa en centro america', 'Una de las mas viejas']
    },
    {
      id: '4',
      title: 'Isla de Ometepe',
      imageURL: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/da/8c/c7/little-morgan-s-resort.jpg?w=900&h=-1&s=1',
      Comments: ['Sus paisajes de otro mundo', 'El mejor lugar para visitar']
    }
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getplace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addplace(title: string, imageURL: string) {
    this.places.push({
      id: this.places.length + 1 + '',
      title,
      imageURL,
      Comments: []
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    });
  }

  
}
