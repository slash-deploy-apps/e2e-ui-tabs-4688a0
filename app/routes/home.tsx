export function loader() {
  return {
    version: process.env.APP_VERSION ?? 'unset',
    deployedAt: new Date().toISOString(),
  };
}

export default function Home({ loaderData }: { loaderData: { version: string; deployedAt: string } }) {
  return (
    <main style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>S/ASH E2E Test App</h1>
      <p data-testid="version">version: {loaderData.version}</p>
      <p data-testid="deployedAt">deployedAt: {loaderData.deployedAt}</p>
    </main>
  );
}
