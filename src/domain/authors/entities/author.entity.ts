export class Author {
  constructor(
    private readonly id: string,
    private readonly firstName: string,
    private readonly lastName: string,
    private readonly email: string,
    private readonly password: string,
    private readonly createdAt: number,
    private readonly updatedAt: number,
  ) {}
  getId(): string {
    return this.id;
  }
  getFirstName(): string {
    return this.firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
  getCreatedAt(): number {
    return this.createdAt;
  }
  getUpdatedAt(): number {
    return this.updatedAt;
  }
}
