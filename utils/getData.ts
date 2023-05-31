// import { API_KEY, API_URL } from '@env';
const API_KEY = '29612fa9a60645cb919e4f6525d5ed0a';
const API_URL = 'https://newsapi.org/v2/everything';

export interface IParams {
  search: string;
  sort?: string;
  startDate?: string;
  endDate?: string;
}

async function getData(params: IParams) {
  const { search, sort, startDate, endDate } = params;

  const apiUrl = API_URL;
  const apiKey = API_KEY;

  const sortQuery = (sort && `&sortBy=${sort}`) || '';
  const fromQuery = (startDate && `&from=${startDate}`) || '';
  const toQuery = (endDate && `&to=${endDate}`) || '';

  const res = await fetch(
    `${apiUrl}?q=${search || 'a'}${sortQuery}${fromQuery}${toQuery}`,
    {
      headers: { 'X-Api-Key': `${apiKey}` },
    }
  );

  if (res.ok) {
    const data = res.json();
    return data;
  }

  throw new Error();
}

export { getData };
