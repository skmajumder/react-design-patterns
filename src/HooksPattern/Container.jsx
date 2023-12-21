import useApiCall from "./useApiCall";

const BASE_URL = "https://api.npoint.io/99e9834d25d0e5aa056e";

const Container = () => {
  const { isLoading, data: posts } = useApiCall(BASE_URL);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Hooks Pattern</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Container;
