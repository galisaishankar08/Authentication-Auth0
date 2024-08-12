"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Authentication Auth0</h1>
      {user && (
        <div>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}

      {!user ? (
        <a href="/api/auth/login">Login</a>
      ) : (
        <a href="/api/auth/logout">Logout</a>
      )}
    </main>
  );
}
