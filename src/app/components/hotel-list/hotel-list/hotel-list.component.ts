import { Component, OnInit } from "@angular/core";
import { IHOTEL } from "../../interface-hotel-list";

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
})
export class HotelListComponent implements OnInit {
    public title: string = 'Liste hotels';
    public hotelFilter: string= ''
    public showBadge: boolean= false
    public noteRating: number=0
    public hotels: IHOTEL[] = [
        {   hotelId: 1,
            hotelName: 'Buea sweet life',
            description: 'Belle vue au bord de la mer',
            price: 230.5,
            imageUrl: 'assets/img/hotel-room.jpg',
            rating: 4.5
        },
        {   hotelId: 2,
            hotelName: 'Marakech',
            description: 'Profiter de la vue sur les montagnes',
            price: 145.5,
            imageUrl: 'assets/img/the-interior.jpg',
            rating: 3
        },
        {   hotelId: 3,
            hotelName: 'hotel 5 etoile',
            description: 'Interieur superbe',
            price: 200.5,
            imageUrl: 'assets/img/indoors.jpg',
            rating: 5
        },
        {   hotelId: 4,
            hotelName: 'Brezil',
            description: 'Magnifique vue sur la foret',
            price: 530.5,
            imageUrl: 'assets/img/window.jpg',
            rating: 2.7
        },
    ]
    ngOnInit(): void {
    }
    
    toggleIsNewBadge() {
        this.showBadge= !this.showBadge
    }
    receiveRating(event: any) {
        this.noteRating= event
    }
} 