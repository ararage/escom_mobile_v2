import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams, Alert } from 'ionic-angular';
//Servicio de comunicacion de autos
import { BasicProvider } from '../../providers/basic/basic';

@Component({
  selector: 'page-autos',
  templateUrl: 'autos.html',
  providers:[BasicProvider]
})
export class AutosPage implements OnInit{
  image:any
  public autos:any[]
  sinAutos:boolean
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController,
    private basicProvider: BasicProvider) {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.basicProvider.getData('autos').subscribe(
      (result)=>{
        if(!result){
          this.displayMessage('No hay autos', 'Ocurrio un problema')
          this.sinAutos = true
        }else{
          this.autos = result.data
          this.sinAutos = false
          localStorage.setItem('autos', JSON.stringify(this.autos))
        }
      },
      (error)=>{
        console.log(error.message)
        if(error != null){
          this.displayMessage('Ocurrio un problema',
          <any>error.message)
        }
      }
    )
  }

  //función que se encarga de mostrar mensaje Alerta 
  private displayMessage(err:string,title:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: err,
      buttons: [
        "Ok"
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutosPage');
  }

  ionViewDidEnter(){
    this.getData()
  }

}
