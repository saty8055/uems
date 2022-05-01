import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderComponent } from 'src/app/loader/loader.component';
import { ApiService } from 'src/app/services/api/api.service';
import { BotService } from 'src/app/services/notification-bot/bot.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private api: ApiService, private bot: BotService) { }

  @ViewChild(LoaderComponent, { static: true })
  private loader: LoaderComponent;

  page:any = {};
  bookings: any[] = [];
  pageNumber: number = 0;
  pageSize: number = 50;
  sortBy: string = "bookingFrom";
  sortDirection: string = "desc";

  ngOnInit() {
    this.load();
  }

  load() {
    this.loader.load();
    this.api.listBookings(this.pageNumber, this.pageSize, this.sortBy, this.sortDirection).subscribe(response => {
      this.loader.resume();
      this.api.validateResponse(response, data => {
        this.page.numberOfElements = data.numberOfElements;
        this.page.totalPages = data.totalPages;
        this.page.totalElements = data.totalElements;
        this.bookings = data.content;
      }, error => {
        this.bot.fail(error);
      });
    });
  }

  cancel(id:string){
    this.loader.load();
    this.api.cancel(id).subscribe(response=>{
      this.loader.resume();
      this.api.validateResponse(response, data=>{
        this.bot.success("Booking Cancelled !");
        this.load();
      }, error=>{
        this.bot.fail(error);
      })
    })
  }

}
