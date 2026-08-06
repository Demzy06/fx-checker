const BASE_URL = "https://api.frankfurter.dev/v2";

export async function getCurrencies(setterFtn, target, setIsLoading, setError) {
  setError(false);
  try {
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/${target}`);

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    setterFtn(data);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    setError(true);
    console.log(error);
  }
}

export async function getExchangeRate(
  target,
  base,
  quote,
  setterFtn,
  setIsLoading,
  setError,
) {
  try {
    setIsLoading(true);

    const res = await fetch(`${BASE_URL}/${target}/${base}/${quote}`);
    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    setterFtn(data);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    setError(true);
    console.log(error);
  }
}

export async function getExchangeHistory(
  base,
  quote,
  date,
  setterFtn,
  setIsLoading,
  setError,
) {
  setError(false);
  try {
    setIsLoading(true);

    const res = await fetch(
      `${BASE_URL}/rates?base=${base}&quotes=${quote}&from=${date}`,
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();

    setterFtn(data);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    setError(true);
    console.log(error);
  }
}
