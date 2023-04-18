import { CreateAuthorDto } from '../dtos/create-author.dto';
import { Author } from '../entities/author.entity';
import { Inject, Injectable } from '@nestjs/common';
import { AuthorService } from './author.service';
import {
  AuthorRepository,
  IAuthorRepository,
} from '../repositories/author.repository';

@Injectable()
export class AuthorServiceImpl implements AuthorService {
  constructor(
    @Inject(AuthorRepository)
    private readonly authorRepository: IAuthorRepository,
  ) {}
  async createAuthor(dto: CreateAuthorDto): Promise<Author> {
    // Business logic goes here
    const author = new Author(
      dto.id,
      dto.firstName,
      dto.lastName,
      dto.email,
      dto.password,
      12,
      12,
    );
    return await this.authorRepository.createAuthor(author);
  }
  async listAuthors(): Promise<Author[]> {
    return await this.authorRepository.findAll();
  }
}
