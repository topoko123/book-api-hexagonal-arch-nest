import { CreateAuthorDto } from '../dtos/create-author.dto';
import { Author } from '../entities/author.entity';

export interface AuthorRepository {
  createAuthor(dto: CreateAuthorDto): Promise<Author>;
}
