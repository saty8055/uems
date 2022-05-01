import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderComponent } from 'src/app/loader/loader.component';
import { ApiService } from 'src/app/services/api/api.service';
import { BotService } from 'src/app/services/notification-bot/bot.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService, private bot: BotService) { 
    this.form = this.formBuilder.group({
      medicineName: ['', Validators.required],
      mrp: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }

  @ViewChild(LoaderComponent, { static: true })
  private loader: LoaderComponent;

  ngOnInit() {
    this.list();
  }

  funds:any[] = [];

  form: FormGroup;

  list(){
    this.loader.load();
    this.api.listMedicines().subscribe(response => {
      this.loader.resume();
      this.api.validateResponse(response, data => {
        this.funds = data;
      }, error => {
        this.bot.fail(error);
      });
    });
  }

  validateAndAdd(){
    let funds = this.form.value;
    this.loader.load();
    this.api.addMedicine(funds).subscribe(response => {
      this.loader.resume();
      this.api.validateResponse(response, data=>{
        this.funds.push(data);
        this.form.reset();
        this.bot.success("Medicine Added!");
      }, error=>{
        this.bot.fail(error);
      })
    });
  }

}
