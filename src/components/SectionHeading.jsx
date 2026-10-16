export default function SectionHeading({ title, ja }) {
  return (
    <div className="section-heading">
      <h2 className="section-title">{title}</h2>
      {ja && <span className="telop" lang="ja">{ja}</span>}
    </div>
  );
}
