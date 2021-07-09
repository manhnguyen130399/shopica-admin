import { StorageService } from './../storage/storage.service';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { TokenData } from '@app/models/token-data';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  user: TokenData;
  constructor(private readonly storageService: StorageService) { }

  getToken(): string {
    this.user = this.storageService.getValue<TokenData>(environment.tokenKey);
    if (this.user != null) {
      return this.user.token;
    }
    return null;
  }

  getRole(): string {
    this.user = this.storageService.getValue<TokenData>(environment.tokenKey);
    if (this.user != null) {
      return this.user.role;
    }
    return null;
  }

  isTokeExpire(): boolean {
    this.user = this.storageService.getValue<TokenData>(environment.tokenKey);
    if (this.user != null && this.user.exp * 1000 > Date.now()) {
      return true;
    }
    return false;
  }

  getStoreId(): number {
    this.user = this.storageService.getValue<TokenData>(environment.tokenKey);
    if (this.user != null) {
      return this.user.storeId;
    }
    return null;
  }

  getName(): string {
    this.user = this.storageService.getValue<TokenData>(environment.tokenKey);
    if (this.user != null) {
      return this.user.name;
    }
    return null;
  }

  getUserName(): string {
    this.user = this.storageService.getValue<TokenData>(environment.tokenKey);
    if (this.user != null) {
      return this.user.sub;
    }
    return null;
  }

  getImage(): string {
    this.user = this.storageService.getValue<TokenData>(environment.tokenKey);
    if (this.user != null) {
      return this.user.image;
    }
    return null;
  }


  getAccountId(): number {
    this.user = this.storageService.getValue<TokenData>(environment.tokenKey);
    if (this.user != null) {
      return this.user.accountId;
    }
    return null;
  }
}
