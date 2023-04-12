import { CreateAuthorDto } from '../dtos/create-author.dto';
import { Author } from '../entities/author.entity';
import { Injectable } from '@nestjs/common';
import { AuthorService } from './author.service';

@Injectable()
export class AuthorServiceImpl implements AuthorService {
  async createAuthor(dto: CreateAuthorDto): Promise<Author> {
    // Business logic goes here
    return new Author(
      dto.id,
      dto.firstName,
      dto.lastName,
      dto.email,
      dto.password,
      123123123,
      123213123,
    );
  }
}
