import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorServiceImpl } from '../../../domain/authors/services/author-impl.service';
import {
  CreateAuthorUseCase,
  IAuthorApplication,
} from '../../../application/authors/usecase/create-author.usecase';
import { IAuthorService } from '../../../domain/authors/services/author.service';

@Module({
  imports: [],
  controllers: [AuthorsController],

  providers: [
    {
      provide: IAuthorApplication,
      useClass: CreateAuthorUseCase,
    },
    {
      provide: IAuthorService,
      useClass: AuthorServiceImpl,
    },
  ],
  exports: [],
})
export class AuthorModule {}
