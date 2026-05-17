export function loader() {
  // Echo whitelisted public env vars so E2E scenarios can verify env-var changes
  // are actually applied by the Coolify deploy.
  return {
    PUBLIC_GREETING: process.env.PUBLIC_GREETING ?? null,
    PUBLIC_REGION: process.env.PUBLIC_REGION ?? null,
    NODE_ENV: process.env.NODE_ENV ?? null,
  };
}

export default function EnvRoute({ loaderData }: { loaderData: Record<string, string | null> }) {
  return <pre data-testid="env-dump">{JSON.stringify(loaderData, null, 2)}</pre>;
}
