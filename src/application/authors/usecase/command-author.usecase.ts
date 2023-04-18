import { Author } from '../../../domain/authors/entities/author.entity';
import { CreateAuthorDto } from '../../../domain/authors/dtos/create-author.dto';
import { Inject, Injectable } from '@nestjs/common';
import {
  AuthorService,
  IAuthorService,
} from '../../../domain/authors/services/author.service';

export interface AuthorApplication {
  execute(dto: CreateAuthorDto): Promise<Author>;
  fetchAuthors(): Promise<Author[]>;
}

export const IAuthorApplication = Symbol('IAuthorApplication');

@Injectable()
export class CommandAuthorUseCase implements AuthorApplication {
  constructor(
    @Inject(IAuthorService)
    private readonly authorService: AuthorService,
  ) {}
  async execute(dto: CreateAuthorDto): Promise<Author> {
    return this.authorService.createAuthor(dto);
  }
  async fetchAuthors(): Promise<Author[]> {
    return this.authorService.listAuthors();
  }
}
