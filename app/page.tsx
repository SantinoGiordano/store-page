

export default async function Text() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()


  return (
    <ul>
      <div className=''>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      </div>
    </ul>
  )
}