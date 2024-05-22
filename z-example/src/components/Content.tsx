import { ChangeEvent, FormEvent, useState } from "react";

const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState<string[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setInputValue(value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (inputValue !== "") {
      // Prevent the default form submission
      setSubmittedValue((prev) => [...prev, inputValue]);
      // Set the submitted value
      setInputValue(""); // Optionally clear the input after submission
    } else {
      alert("Enter Values!");
    }
  }

  return (
    <section>
      {/* div for input */}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="styled"
          />
          <button type="submit" className="styled hoveres">
            Submit
          </button>
        </form>
      </div>

      {/* div for values */}
      <div>
        {submittedValue.length > 0 ? (
          <ul className="styled">
            {submittedValue.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        ) : (
          <span>No Tasks here...</span>
        )}
      </div>
    </section>
  );
};

export default Content;
