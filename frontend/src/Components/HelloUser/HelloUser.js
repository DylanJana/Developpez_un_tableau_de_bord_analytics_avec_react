export default function HelloUser({name}) {
  return (
    <>
      <h1 className="title--xl">Bonjour <span className="text--secondary">{name}</span></h1>
    </>
  )
}
