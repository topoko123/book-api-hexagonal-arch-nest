export interface AuthorModelMongo extends Document {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  created_at: number;
  updated_at: number;
}

export interface ConvertAuthorModelMongo {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  created_at: number;
  updated_at: number;
}
