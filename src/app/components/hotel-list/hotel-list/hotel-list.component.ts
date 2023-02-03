import { Component, OnInit } from "@angular/core";
import { IHOTEL } from "../../interface-hotel-list";

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
})
export class HotelListComponent implements OnInit {
    public title = 'Liste hotels';
    public hotelFilter= ''
    public showBadge: boolean= false
    public hotels: IHOTEL[] = [
        {   hotelId: 1,
            hotelName: 'Buea sweet life',
            description: 'Belle vue au bord de la mer',
            price: 230.5,
            imageUrl: 'assets/img/hotel-room.jpg'
        },
        {   hotelId: 2,
            hotelName: 'Marakech',
            description: 'Profiter de la vue sur les montagnes',
            price: 145.5,
            imageUrl: 'assets/img/the-interior.jpg'
        },
        {   hotelId: 3,
            hotelName: 'hotel 5 etoile',
            description: 'Interieur superbe',
            price: 200.5,
            imageUrl: 'assets/img/indoors.jpg'
        },
        {   hotelId: 4,
            hotelName: 'Brezil',
            description: 'Magnifique vue sur la foret',
            price: 530.5,
            imageUrl: 'assets/img/window.jpg'
        },
    ]
    ngOnInit(): void {
    }
    
    toggleIsNewBadge() {
        this.showBadge= !this.showBadge
    }
}