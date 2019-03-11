import { Component, OnInit, HostBinding } from '@angular/core';
import {NoticesService} from 'src/app/services/notices.service';
import { Noticia } from 'src/app/models/Noticia';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-notice-form',
  templateUrl: './notice-form.component.html',
  styleUrls: ['./notice-form.component.css']
})
export class NoticeFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  noticia: Noticia={
id: 0,
titulo: '',
descripcion: '',
image:'',
created_at: new Date() //created_at sera una fecha actual

};

edit: boolean= false; //para saber si quiere guardar o editar, si esta en true es porque el usuario quiere editar

  constructor(private noticiaService: NoticesService, private router: Router, private activateRoute: ActivatedRoute) { }


  ngOnInit() {
const params = this.activateRoute.snapshot.params; //los parametros estan dentro de un objeto llamado snapchot.params.

if(params.id){
this.noticiaService.getNoticia(params.id).subscribe(

res=>{

  console.log(res);
  this.noticia= res;
  this.edit=true;
},
err=>
console.log(err)
)

}

  }
  
guardarNoticia(){
  delete this.noticia.created_at;
  delete this.noticia.id;
  this.noticiaService.saveNoticia(this.noticia)
  .subscribe(
res => {
  console.log(res);
  this.router.navigate(['/noticias']);
},
err => console.log(err)

  )
  

}

updateNoticia(){
  delete this.noticia.created_at;
  this.noticiaService.updateNoticia(this.noticia.id, this.noticia).subscribe(
res=> {
console.log(res);
this.router.navigate(['/noticias']);

},
err=>
console.log(err)
  )
  
}


}
