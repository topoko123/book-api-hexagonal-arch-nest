import { IAuthorRepository } from '../../../../../domain/authors/repositories/author.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from "mongoose";
import { Author } from '../../../../../domain/authors/entities/author.entity';
import { Injectable } from '@nestjs/common';
import { AuthorModelMongo, ConvertAuthorModelMongo } from "../models/author.model";

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
}
