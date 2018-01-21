import { Injectable } from '@angular/core';
import { ElectionService } from './../api/api/election.service';
import { User } from './../api/model/user';
import { Election } from './../api/model/election';
import { UserService } from '../api/api/user.service';

@Injectable()
export class SettingsService {

  private basekey : string = 'settings';
  constructor(private electionService: ElectionService, private userService: UserService) {
    this.reset();
  }

  reset() {
    sessionStorage.clear();
    this.electionService.getElectionById(1).subscribe(
      election => sessionStorage.setItem(`${this.basekey}-selectedelection`, JSON.stringify(election))
    )
    sessionStorage.setItem(`${this.basekey}-user`, 'guest');
  }

  getSelectedElection() : Election {
    return JSON.parse(sessionStorage.getItem(`${this.basekey}-selectedelection`));
  }

  getUser() : User {
    return JSON.parse(sessionStorage.getItem(`${this.basekey}-user`));
  }

  setUser(user: User) {
    return sessionStorage.setItem(`${this.basekey}-user`, JSON.stringify(user));
  }
}