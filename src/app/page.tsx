import _STATIC from '../../static.json';

const { person, experience } = _STATIC.data.attributes.contents;

export default function Home() {
  return (
    <main className="m-4">
      <div>
        <h1>{person.givenName} {person.familyName}</h1>
        <address>
          {person.address?.streetAddress && (
            <>{person.address?.streetAddress}<br /></>
          )}
          {person.address?.addressLocality ?? ''}, {person.address?.addressRegion ?? ''} {person.address?.postalCode ?? ''}
        </address>
        {person.email}
        <br />
        {person.telephone}
      </div>
      <ul className='divide-y divide-gray-100'>
        {experience.map((e, i) => (
          <li key={i} className='flex justify-between gap-x-6 py-5'>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{e.title}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{e.company_name}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}