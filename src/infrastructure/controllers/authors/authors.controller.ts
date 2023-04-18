import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Post,
  Res,
} from '@nestjs/common';
import {
  AuthorApplication,
  IAuthorApplication,
} from '../../../application/authors/usecase/command-author.usecase';
import { CreateAuthorDto } from '../../../domain/authors/dtos/create-author.dto';
import { ResponseAuthorCreated } from './response/interface/create-author-response.interface';

@Controller('author')
export class AuthorsController {
  constructor(
    @Inject(IAuthorApplication)
    private authorUseCase: AuthorApplication,
  ) {}
  @Get('/hello')
  async getHello() {
    return { message: 'ok' };
  }
  @Post()
  async createAuthor(@Res() request, @Body() createAuthorDto: CreateAuthorDto) {
    const author = await this.authorUseCase.execute(createAuthorDto);
    const res: ResponseAuthorCreated = {
      id: '123',
      full_name: author.getFirstName() + ' ' + author.getLastName(),
      email: author.getEmail(),
    };
    return request.status(HttpStatus.CREATED).json(res);
  }
  @Get()
  async getAllAuthorsAPI(@Res() request) {
    const authors = await this.authorUseCase.fetchAuthors();
    return request.status(HttpStatus.OK).json(authors);
  }
}
