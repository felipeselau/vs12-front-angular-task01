import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'vs12-front-angular-task01';
  bannerPath = '../assets/banner.jpg';
  anarchy = 'https://tv-fanatic-res.cloudinary.com/iu/s--XkbWX5lZ--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1408366948/sons-of-anarchy-season-7-promo-pic.jpg';
  anarchy2= 'https://1.bp.blogspot.com/-tJ3Th0Ebp_g/YEmUk_-G8sI/AAAAAAAAPvQ/fqw5PFxR2oEg0RyIl5PlV03YzjkvaepgQCLcBGAsYHQ/s620/E7.jpg'
  anarchy3 = 'https://1.bp.blogspot.com/-dMLzilncbk4/YUu8qbuahsI/AAAAAAAAREk/X-ZKohiVKmAPD2AMwQsaQuC1PGLr2UQLgCLcBGAsYHQ/s620/E7.jpg'
  osaka = 'https://i.pinimg.com/originals/be/2d/a5/be2da59b65ea4b8d31f366a2fdda194d.jpg'

  shareFunction(){
    alert('Obrigado por querer compartilhar a série com as pessoas! essa função será implementada em breve!')
  }

  menuClick(){
    alert("Essa função será implementada em breve! aqui haverá um menu hamburguer onde você poderá navegar entre as seções da página!")
  }
}
