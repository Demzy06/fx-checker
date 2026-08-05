const BASE_URL = "https://api.frankfurter.dev/v2";
import { useTabContext } from "../context/TabContext";

export async function getCurrencies(setterFtn, target) {
  try {
    const res = await fetch(`${BASE_URL}/${target}`);
    const data = await res.json();
    setterFtn(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getExchangeRate(target, base, quote, setterFtn) {
  try {
    const res = await fetch(`${BASE_URL}/${target}/${base}/${quote}`);
    const data = await res.json();
    setterFtn(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getExchangeHistory(base, quote, date, setterFtn) {
  try {
    const res = await fetch(
      `${BASE_URL}/rates?base=${base}&quotes=${quote}&from=${date}`,
    );
    const data = await res.json();
    setterFtn(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
