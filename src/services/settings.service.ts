import { Injectable } from "@angular/core";


@Injectable()
export class SettingsService{


  private altBackground = false;

  setBackground(isAlt: boolean){
    this.altBackground = isAlt;
  }

  isAltBackground():boolean{
    return this.altBackground;
  }

}
