import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/placeholder.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  images: Images[];
  error: any;

  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit(): void {
  }

  getter() {
    this.crudService.getPhotos().subscribe((data: Images[]) => {
      this.images = data;
      // console.log('data' + data);
      // console.log('variável' + this.images);
    }, (error: any) => {
      this.error = error;
      // console.log('erro:' + error);
    })
    // o subscribe se subscreve em um observable. Basicamente, pega o que ele tem
  }

}
