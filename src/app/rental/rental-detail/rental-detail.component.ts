import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalSevice } from '../shared/rental.sevice';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;

  constructor( private route: ActivatedRoute,
               private rentalService: RentalSevice) { }

  ngOnInit() {
    this.rental = new Rental();
    this.route.params.subscribe(
        (params) => {

          this.getRental(params['rentalId'])

        })
  }

  getRental(rentalId: string){
    this.rentalService.getRentalById(rentalId).subscribe(
    (rental: Rental) => {
      this.rental = rental;

      }
    );

  }

}
