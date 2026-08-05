const BASE_URL = "https://api.frankfurter.dev/v2";

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

// if (latestCurrenciesRate !== "") return;
export async function getLatestRates(base, setterFtn) {
  try {
    const res = await fetch(
      ` https://api.frankfurter.dev/v1/latest?base=${base} `,
    );
    const data = await res.json();
    setterFtn(data);
  } catch (error) {
    console.log(error);
  }
}

getLatestRates();
// https://api.frankfurter.dev/v2/rates?base=NGN&quotes=ARS&from=2026-07-01
