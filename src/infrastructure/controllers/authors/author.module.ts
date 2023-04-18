import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorServiceImpl } from '../../../domain/authors/services/author-impl.service';
import {
  CreateAuthorUseCase,
  IAuthorApplication,
} from '../../../application/authors/usecase/create-author.usecase';
import { IAuthorService } from '../../../domain/authors/services/author.service';
import { MongooseModule } from '@nestjs/mongoose';
import AuthorSchema from '../../database/repositories/author/mongo/author-schema.mongo';
import { AuthorRepository } from '../../../domain/authors/repositories/author.repository';
import { AuthorRepositoryMongo } from '../../database/repositories/author/mongo/author.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]), // register the AuthorModel with MongooseModule
  ],
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
    {
      provide: AuthorRepository,
      useClass: AuthorRepositoryMongo,
    },
  ],
  exports: [],
})
export class AuthorModule {}
