export type AppConfig = {
  port: number;
  dbHost: string;
  salt: string;
};

export interface Config {
  getPort(): number;
  getDbHost(): string;
  getSalt(): string;
}
