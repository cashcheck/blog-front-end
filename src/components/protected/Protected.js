function Protected() {
  const token = localStorage.getItem("token");

  async function getAccess() {
    try {
      const rawResponse = await fetch("http://localhost:5000/protected", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = rawResponse.json();
      console.log(response);
      return response;
    } catch (err) {
      throw err;
    }
  }

  return (
    <div>
      <button onClick={getAccess}>get Access!</button>
    </div>
  );
}

export default Protected;
