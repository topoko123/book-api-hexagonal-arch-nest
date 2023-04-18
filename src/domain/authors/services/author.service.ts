import { CreateAuthorDto } from '../dtos/create-author.dto';
import { Author } from '../entities/author.entity';

export interface AuthorService {
  createAuthor(dto: CreateAuthorDto): Promise<Author>;
  listAuthors(): Promise<Author[]>
}

export const IAuthorService = Symbol('IAuthorService');
