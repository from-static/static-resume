import DATA from '../../static.json';

export default function Home() {
  return (
    <main className="">
      <code>{DATA.type} v{DATA.version}</code>
      <ul>
        {DATA.contents.experience.map((e, i) => (
          <li key={i}>{e.title} &mdash; {e.company_name}</li>
        ))}
      </ul>
    </main>
  )
}