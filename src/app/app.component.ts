import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  Commands:Array<string> = ['1.Hello - Greetings', '\n2.Date - For Date/Time', '\n3.Time - For Time', '\n4.Developer - About me', '\n5.Contact']

  MyMsg: string = '';
  LisaMsg: string = '';

  ChatArr: Array<{ sender: string, message: any }> = [
    { sender: 'Lisa', message: 'Hello I am Lisa, how can I help you?' }
  ];

  landingText: boolean = true;

  DT = new Date()

  Submit() {
    if (this.MyMsg !== '') {
      this.ChatArr.push({ sender: 'Me', message: this.MyMsg });

      if (this.MyMsg === 'commands' || this.MyMsg === 'Commands') {
        this.ChatArr.push({ sender: 'Lisa', message: this.Commands });
      }
      if (this.MyMsg === 'Date' || this.MyMsg === 'date' || this.MyMsg === '2') {
        this.ChatArr.push({ sender: 'Lisa', message: new Date });
      }
      if (this.MyMsg === 'Hello' || this.MyMsg === 'hello' || this.MyMsg === '1') {
        this.ChatArr.push({ sender: 'Lisa', message: 'Welcome How Can I help you today?' });
      }
      if (this.MyMsg === 'Time' || this.MyMsg === 'time' || this.MyMsg === '3') {
        this.ChatArr.push({ sender: 'Lisa', message: this.DT.getHours()+':'+this.DT.getMinutes()+':'+this.DT.getSeconds() });
      }
      if(this.MyMsg === 'Developer' || this.MyMsg === 'developer' || this.MyMsg === '4'){
        this.ChatArr.push({ sender: 'Lisa', message: 'Hello I am Lazare Frontend Developer From Tbilisi,Georgia. \n You can see more about me Down below. \n hope you like it :) \nhttps://lazare-mirziashvili.vercel.app'});
      }
      if(this.MyMsg === 'secret' || this.MyMsg === 'Secret' || this.MyMsg === '10'){
        this.ChatArr.push({ sender: 'Lisa', message: 'Wow you found secreettt'});
      }
      if(this.MyMsg === 'Contact' || this.MyMsg === 'contact' || this.MyMsg === '5'){
        this.ChatArr.push({ sender: 'Lisa', message: '\n(+995) 555 992 212 \n lazaremirziashvili8@gmail.com \n Lazare Mirziashvili'});
      }


      this.MyMsg = '';
      console.log(this.ChatArr);
    }
  }
}

