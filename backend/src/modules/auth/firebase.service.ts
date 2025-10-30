// Firebase 服务封装
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private firestore: FirebaseFirestore.Firestore;
  private auth: admin.auth.Auth;
  private storage: admin.storage.Storage;
  constructor(private config: ConfigService) {}

  onModuleInit() {
    const path = this.config.get<string>('firebase.serviceAccountKeyPath');
    const credential = path
      ? admin.credential.cert(require(path))
      : admin.credential.applicationDefault();
    admin.initializeApp({
      credential,
    });
    this.auth = admin.auth();
    this.firestore = admin.firestore();
    this.storage = admin.storage();
    console.log('✅ Firebase initialized');
  }

  async verifyIdToken(idToken: string) {
    return admin.auth().verifyIdToken(idToken);
  }

  async getUser(uid: string) {
    return admin.auth().getUser(uid);
  }

  getAuth() {
    return this.auth;
  }

  getFirestore() {
    return this.firestore;
  }

  getStorageBucket() {
    return this.storage.bucket();
  }
}
