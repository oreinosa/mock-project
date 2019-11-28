import { Injectable } from '@angular/core';
import { Link } from '../shared/models/link';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, firestore } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private collectionName = 'users';
  links: BehaviorSubject<Link[]>;
  actions: BehaviorSubject<Link[]>;
  user$: Observable<User>;
  private user: User;
  private initLinks: Link[] = [
  ];

  private initActions: Link[] = [
    { label: "Login", route: "login", icon: "person" },
    { label: "Signup", route: "signup", icon: "person_add" }
  ];

  private userActions: Link[] = [
    { label: "Profile", route: "profile", icon: "person" }
  ];

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private notifications: NotificationsService
  ) {
    this.links = new BehaviorSubject(this.initLinks);
    this.actions = new BehaviorSubject(this.initActions);

    this.user$ = this.afAuth.authState
      .pipe(
        switchMap(fbUser => {
          if (fbUser) {
            return this.getUser(fbUser.uid);
          }
          return of(null);
        }),
        tap((user: User) => {
          console.log('User: ', user);
          this.user = user;
          const role = user ? user.role : "";
          switch (role) {
            case "Customer":
              this.setActions(this.userActions);
              break;
            default:
              this.setActions(this.initActions);
              this.setLinks(this.initLinks);
          }
        })
      )
  }

  private setLinks(links: Link[]) {
    this.links.next(links);
  }

  private setActions(actions: Link[]) {
    this.actions.next(actions);
  }

  public loginWithGoogle() {
    return this.loginWithProvider("google");
  }

  public async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    this.notifications.notify("Good bye!", "info");
  }

  private loginWithProvider(providerName: string): Promise<void> {
    let provider: auth.GoogleAuthProvider;
    switch (providerName) {
      case "google":
        provider = new auth.GoogleAuthProvider();
        break;
    }
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential => {
        this.updateUserData(credential);
        this.router.navigate(['/']);
        this.notifications.notify(`Logged in as ${credential.user.displayName}`, "success");
      });
  }

  private updateUserData(credential: auth.UserCredential) {
    const fbUser = credential.user;
    let user: User = {
      id: fbUser.uid,
      name: fbUser.displayName,
      email: fbUser.email
    };
    if (credential.additionalUserInfo.isNewUser) {
      console.log('welcome new user');
      user.role = "Customer";
    };
    let docReference = this.afs.collection(this.collectionName).doc<User>(fbUser.uid);
    return docReference
      .set(user, { merge: true });
  }

  private getUser(id: string): Observable<User> {
    return this.afs
      .collection(this.collectionName)
      .doc<User>(id)
      .valueChanges()
    // .get()
    // .pipe(
    //   map(snapshot => snapshot.data() as User)
    // )
    // .toPromise();
  }
}
