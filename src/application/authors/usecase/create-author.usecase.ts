import { Author } from '../../../domain/authors/entities/author.entity';
import { CreateAuthorDto } from '../../../domain/authors/dtos/create-author.dto';
import { Inject, Injectable } from '@nestjs/common';
import {
  AuthorService,
  IAuthorService,
} from '../../../domain/authors/services/author.service';

export interface AuthorApplication {
  execute(dto: CreateAuthorDto): Promise<Author>;
}
// export const ITicketRepository = Symbol('ITicketRepository');
export const IAuthorApplication = Symbol('IAuthorApplication');

@Injectable()
export class CreateAuthorUseCase implements AuthorApplication {
  constructor(
    @Inject(IAuthorService)
    private readonly authorService: AuthorService,
  ) {}
  async execute(dto: CreateAuthorDto): Promise<Author> {
    return this.authorService.createAuthor(dto);
  }
}
