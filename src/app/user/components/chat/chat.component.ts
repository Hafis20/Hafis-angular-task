import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  public roomId!:string;
  public message: string = '';
  public messages: {user:string,message:string}[] = [];
  

  public currentUser!:string;
  public selectedUser!:string;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.listMessage();
  }

  public sendMessage() {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }

  public listMessage() {
    this.chatService.listMessage().subscribe((data:any)=>{
      this.messages.push(data.data);
    })
  }
}
