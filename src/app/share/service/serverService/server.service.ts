import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private ServerList: {
    id: number,
    name: string,
    status: string
  } [] = [{
      id: 1,
      name: "Matt Haddon",
      status: 'online'
    },
    {
      id: 2,
      name: "Anna Lee",
      status: 'online'
    },
    {
      id: 3,
      name: "James Washington",
      status: 'offline'
    }
  ];
  constructor() {}
  getServer(id:number) {
    if (Number(id) != undefined) {
      console.log(id)
      return this.ServerList[id-1];
    }
    throw new Error('No server found');
  }
  updateServer(id:number,server:{name:string, status:string}){
    if(Number(id)!=undefined){
      this.ServerList[id-1].name = server.name;
      this.ServerList[id-1].status = server.status;
    }
  }

  PrintServerList() {
    return this.ServerList.slice();
  }

}
