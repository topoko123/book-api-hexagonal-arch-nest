import { CreateAuthorDto } from '../dtos/create-author.dto';
import { Author } from '../entities/author.entity';

export interface IAuthorRepository {
  createAuthor(body: Author): Promise<Author>;
}

export const AuthorRepository = Symbol('IAuthorRepository');
