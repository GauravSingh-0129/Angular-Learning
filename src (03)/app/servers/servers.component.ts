import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreation = 'No server was created.';
  serverName = 'Testserver';
  // allowUsername = false;
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  constructor(){
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 4000) 
  }

  ngOnInit(){}

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = 'Server is created. And the name is : ' + this.serverName;
  }

  // This is for ne Way Binding...
  // onUpdateServerName(event : Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  //   console.log(event);
  // }
}
