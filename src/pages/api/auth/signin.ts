import type { APIRoute } from 'astro'
import type { Provider } from '@supabase/supabase-js'
import { supabase } from '../../../lib/supabase'

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData()
  const provider = formData.get('provider')?.toString()
  const validProviders = ['google', 'github', 'discord']

  if (provider && validProviders.includes(provider)) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: import.meta.env.DEV
          ? 'http://localhost:4321/api/auth/callback'
          : 'https://hottakes.dev/api/auth/callback'
      }
    })

    if (error) {
      return new Response(error.message, { status: 500 })
    }

    return redirect(data.url)
  }

  return redirect('/dashboard')
}
