'use server';
import { signIn as nextAuthSignIn } from '@/lib/auth/auth';

export async function signInGoogle() {
  await nextAuthSignIn('google')
}