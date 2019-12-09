import {
  Module,
  Injectable,
  ExecutionContext,
  HttpModule,
} from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    HttpModule,
    PassportModule,
  ],
  providers: [JwtStrategy, AuthService],
})
export class AuthModule {}
