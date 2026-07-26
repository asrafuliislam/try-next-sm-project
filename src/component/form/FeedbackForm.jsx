"use client";

const FeedbackForm = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = e.target.message.value;

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    if (data.insertedId) {
      alert("Success");
      e.target.reset();
    } else {
      alert("Failed");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-center"
      >
        <textarea
          required
          name="message"
          rows={10}
          cols={30}
          className="border-2 rounded-2xl p-5"
        />

        <button type="submit" className="btn">
          Add Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;