import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderComponent } from 'src/app/loader/loader.component';
import { ApiService } from 'src/app/services/api/api.service';
import { BotService } from 'src/app/services/notification-bot/bot.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService, private bot: BotService) { 
  }

  @ViewChild(LoaderComponent, { static: true })
  private loader: LoaderComponent;

  taskName:string = "";
  units:number = 1;
  medicineId:string = "";

  ngOnInit() {
    this.list();
    this.listMedicines();
  }

  funds:any[] = [];
  medicines:any[]=[];
  form: FormGroup;

  listMedicines(){
    this.loader.load();
    this.api.listMedicines().subscribe(response => {
      this.loader.resume();
      this.api.validateResponse(response, data => {
        this.medicines = data;
      }, error => {
        this.bot.fail(error);
      });
    });
  }

  list(){
    this.loader.load();
    this.api.listSales().subscribe(response => {
      this.loader.resume();
      this.api.validateResponse(response, data => {
        this.funds = data;
      }, error => {
        this.bot.fail(error);
      });
    });
  }

  validateAndAdd(){
    let tasks:any = {};
    tasks.taskName = this.taskName;
    tasks.units = this.units;
    tasks.medicine = {
      medicineId: this.medicineId
    };
    this.loader.load();
    this.api.addSales(tasks).subscribe(response => {
      this.loader.resume();
      this.api.validateResponse(response, data=>{
        this.funds.push(data);
        this.form.reset();
        this.bot.success("Sales Added!");
      }, error=>{
        this.bot.fail(error);
      })
    });
  }

}
