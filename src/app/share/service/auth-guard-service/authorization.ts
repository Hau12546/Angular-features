export class Authorize {
  constructor(){}

  public IsAuthorized(status:string){
    const permission = new Promise((resolve,reject)=>{
      if(status.match('online')){
        resolve(this.LogIn);
      }
      if(status.match('offline')){
        reject(this.LogOut);
      }
    });
    return permission;
  }

  protected LogIn(){
    return true;
  }

  protected LogOut(){
    return false;
  }

}
