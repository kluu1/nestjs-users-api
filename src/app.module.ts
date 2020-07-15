import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { typeOrmConfig } from './config/typeorm.config';
import { UserRepository } from './auth/user.repository';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AppModule {}
