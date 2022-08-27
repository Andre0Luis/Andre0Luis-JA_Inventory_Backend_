import { Injectable } from "@nestjs/common";
import * as firebase from 'firebase-admin';
@Injectable()
export class UserRepository {
    private _collectionRef: FirebaseFirestore.CollectionReference = firebase.firestore().collection('user');
    public async getUser(UserId: string): Promise<any> {
        return this._collectionRef.doc(UserId).get();
    }
}