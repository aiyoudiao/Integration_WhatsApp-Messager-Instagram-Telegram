import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(private firebase: FirebaseService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];
    try {
      const decoded = await this.firebase.verifyIdToken(token);
      req.user = decoded;
      return true;
    } catch (err) {
      console.error('Firebase token verification failed:', err);
      return false;
    }
  }
}
