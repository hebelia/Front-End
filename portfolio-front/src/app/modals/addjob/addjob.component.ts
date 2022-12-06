import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit{
  
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
  
    this.form= this.formBuilder.group({

      place: ['',[Validators.required]],
      title:['',[Validators.required]],
      description:['',[Validators.required]],
      start: ['',[Validators.required]],
      end:['',[Validators.required]],
      
    })
  }
  
  ngOnInit() {}

// methods
  
  get Place(){
    return this.form.get("place")
  }
  get Title(){
    return this.form.get("title")
  }
  get Description(){
    return this.form.get("description")
  }
  get Start(){
    return this.form.get("start")
  }
  get End(){
    return this.form.get("end")
  }

  get PlaceValid(){

    return this.Place?.touched && !this.Place.valid;

  }
  get TitleValid(){

    return this.Title?.touched && !this.Title.valid;

  }
  get DescriptionValid(){

    return this.Description?.touched && !this.Description.valid;

  }
  get StartValid(){

    return this.Start?.touched && !this.Start.valid;

  }
  get EndValid(){

    return this.End?.touched && !this.End.valid;

  }

  
  onSubmit(event: Event){
    // detiene la propagacion o ejecucion del submit
    event.preventDefault;
    if(this.form.valid){
      // llamar al servicio para enviar datos al server
      // logica extra
      alert("El formulario ha sido enviado con exito!")
    }else{
      this.form.markAllAsTouched();
      alert("Se produjo un error al enviar el formulario! Revise los datos ingresados.")
    }
  }
  
  
  }
  