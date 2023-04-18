import { Author } from '../entities/author.entity';

export interface IAuthorRepository {
  createAuthor(body: Author): Promise<Author>;
  findAll(): Promise<Author[]>;
}

export const AuthorRepository = Symbol('IAuthorRepository');
