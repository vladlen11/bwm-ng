import { Component, OnInit } from '@angular/core';
import { RentalSevice } from '../shared/rental.sevice';
import { Rental } from '../shared/rental.model';


@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = [];

  constructor(private rentalService: RentalSevice) { }

  ngOnInit() {
      const rentalObsevable = this.rentalService.getRentals();

      rentalObsevable.subscribe(
          (rentals: Rental[]) => {
            this.rentals = rentals;
          },
          (err) => {

          },
          () => {

          }
      );
  }

}
