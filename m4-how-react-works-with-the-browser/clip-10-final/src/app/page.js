export default function Page() {
  return (
    <div className="container mt-3">
      <ul>
        <li>
          <a href="http://localhost:3000/products-1-client-only-with-state">
            clip 9 demo - client only with state
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/products-2-client-only-with-suspense">
            clip 9 demo - client only with suspense
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/products-3-client-only-with-suspense-add-useeffect">
            clip 9 demo - client only with suspense add useEffect
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/products-4-server-component-only">
            clip 10 demo - react server with promise and suspense
          </a>
        </li>
      </ul>
    </div>
  );
}
