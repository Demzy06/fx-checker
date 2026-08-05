// if (latestCurrenciesRate !== "") return;
export async function getLatestRates(base, setterFtn, setisLoading, setError) {
  try {
    setisLoading(true);
    const res = await fetch(
      ` https://api.frankfurter.dev/v1/latest?base=${base} `,
    );
    if (!res.ok) throw new Error("Something went wrong, try again!");

    const data = await res.json();
    setterFtn(data);
    setisLoading(false);

  } catch (error) {
    setError(true)
    console.log(error.message);
  }
}