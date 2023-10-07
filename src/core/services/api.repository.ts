import axios from "axios";

export class ApiRepository<T extends { id: string | number }> {
  constructor(public url: string) {}

  async fetchAll(): Promise<T[]> {
    const response = await axios.get(this.url);
    return response.data;
  }
}
