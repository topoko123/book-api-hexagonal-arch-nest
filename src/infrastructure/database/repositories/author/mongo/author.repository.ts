import { IAuthorRepository } from '../../../../../domain/authors/repositories/author.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { Author } from '../../../../../domain/authors/entities/author.entity';
import { Injectable } from '@nestjs/common';
import {
  AuthorModelMongo,
  ConvertAuthorModelMongo,
} from '../models/author.model';

@Injectable()
export class AuthorRepositoryMongo implements IAuthorRepository {
  constructor(
    @InjectModel('Author')
    private readonly authorModel: Model<AuthorModelMongo>,
  ) {}
  async createAuthor(dto: Author): Promise<Author> {
    const s: ConvertAuthorModelMongo = {
      id: dto.getId(),
      first_name: dto.getFirstName(),
      last_name: dto.getLastName(),
      email: dto.getEmail(),
      password: dto.getPassword(),
      created_at: dto.getCreatedAt(),
      updated_at: dto.getUpdatedAt(),
    };
    const createdAuthor = new this.authorModel(s);
    await createdAuthor.save();
    return dto;
  }
  async findAll(): Promise<Author[]> {
    const authorsMongo = await this.authorModel.find();
    const authors = new Array<Author>();
    authorsMongo.forEach((productMongo) => {
      const author = new Author(
        productMongo.id,
        productMongo.first_name,
        productMongo.last_name,
        productMongo.email,
        productMongo.password,
        productMongo.created_at,
        productMongo.updated_at,
      );
      authors.push(author);
    });
    return authors;
  }
}
