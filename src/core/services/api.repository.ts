import axios from "axios";

export class ApiRepository<T extends { id: string | number }> {
  constructor(public url: string) {}

  async fetchAll(): Promise<T[]> {
    const { data } = await axios.get(this.url);
    return data.items;
  }
}
