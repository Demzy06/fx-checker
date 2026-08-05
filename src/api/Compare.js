// if (latestCurrenciesRate !== "") return;
export async function getLatestRates(base, setterFtn, setisLoading, setError) {
  setError(false)
  try {
    setisLoading(true);
    const res = await fetch(
      ` https://api.frankfurter.dev/v1/latest?base=${base} `,
    );

    console.log(res)
    if (!res.ok) {
      throw new Error("Something went wrong, try again!");
    }

    const data = await res.json();
    setterFtn(data);
    setisLoading(false)
  } catch (error) {
    setisLoading(false);
    setError(true)
    console.log(error.message);
  }
}