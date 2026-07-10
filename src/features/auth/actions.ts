"use server";

import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const cookieName = "pde_session";

function getAuthSecret() {
  return new TextEncoder().encode(process.env.AUTH_SECRET || "dev-secret-change-me");
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  const expectedEmail = process.env.ADMIN_EMAIL || "admin@presenciadigital.local";
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  const passwordMatches = passwordHash
    ? await bcrypt.compare(password, passwordHash)
    : password === "admin12345";

  if (email !== expectedEmail || !passwordMatches) {
    redirect("/panel/login?error=1");
  }

  const token = await new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(getAuthSecret());

  const cookieStore = await cookies();
  cookieStore.set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect("/panel");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
  redirect("/panel/login");
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName)?.value;
  if (!token) return null;

  try {
    const verified = await jwtVerify(token, getAuthSecret());
    return verified.payload as { email: string; role: string };
  } catch {
    return null;
  }
}

export async function requireSession() {
  const session = await getSession();
  if (!session) redirect("/panel/login");
  return session;
}
