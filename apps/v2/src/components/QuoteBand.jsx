export function QuoteBand({ children }) {
  return (
    <div className="quote-band">
      <div className="container">
        <p>“{children}”</p>
      </div>
    </div>
  );
}
