import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  public enableDebug = true;
  public testVariable = 'Not Assigned via Conig';

  constructor() { }
}
