import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialDto;

    const newUser = new User();
    newUser.username = username;
    newUser.password = password;

    try {
      await newUser.save();
    } catch (error) {
      if (error.errno === 1062) {
        // duplicate username
        throw new ConflictException('Username already exists');
      }
    }
  }
}
