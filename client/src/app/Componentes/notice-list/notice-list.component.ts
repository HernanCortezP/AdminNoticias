import { Component, OnInit, HostBinding } from '@angular/core';
import {NoticesService} from 'src/app/services/notices.service';
import { Noticia } from 'src/app/models/Noticia';
@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.css']
})
export class NoticeListComponent implements OnInit {

@HostBinding('class') classes = 'row';

noticiass: any = [];

  constructor(private noticesService: NoticesService) { }

  ngOnInit() {
    this.getNoticias();
  }
  
  getNoticias(){
    this.noticesService.getNoticias().subscribe(
      res => {
      this.noticiass = res;
      },
      err => console.log(err)
      
          );

  }
eliminarNoticia(id: string){
this.noticesService.deleteNoticia(id).subscribe(
res=>{
console.log(res);
this.getNoticias();
},
err=> console.log(err)

)
}



}
