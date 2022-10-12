import useFetch from "../hooks/useFetch";

function CustomHooksExample() {
  const { data, error, isLoading} = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}

export default CustomHooksExample;
