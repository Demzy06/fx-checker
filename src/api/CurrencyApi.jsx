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

export async function getExchangeRate(target, base, quote) {
  try {
    const res = await fetch(`${BASE_URL}/${target}/${base}/${quote}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
