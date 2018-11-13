import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()

export class RentalSevice {

    private rentals: any[] = [
        {
            id:"1",
            title: "Central Apartament",
            city: "New York",
            street: "Times Sqaure",
            category: "apartament",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 3,
            shared: false,
            description: "Very nice apartment in center of the city.",
            dailyRate: 34
        },
        {
            id:"2",
            title: "Nice view on ocean",
            city: "San Francisco",
            street: "Main street",
            category: "condo",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 4,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyRate: 43
        },
        {
            id:"3",
            title: "Modern apartment in center",
            city: "New York",
            street: "Time Square",
            category: "apartment",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 1,
            shared: false,
            description: "Very nice apartment in center of the city.",
            dailyRate: 11
        },
        {
            id: "4",
            title: "Old house in nature",
            city: "Spisska Nova Ves",
            street: "Banicka 1",
            category: "house",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 5,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyRate: 23
        }];



    public getRentals(): Observable<Rental[]> {
        const rentalObservable: Observable<Rental[]> = new Observable((observer)=> {

            setTimeout(() => {
                observer.next(this.rentals);
            }, 1000);

            setTimeout(() => {
                observer.error("I AM  ERROR ");
            }, 2000);

            setTimeout(() => {
                observer.complete();
            }, 3000);


        });
    return rentalObservable;
}



}
