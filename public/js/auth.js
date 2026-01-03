import { supabase } from './supabase.js'

export async function login(email, password) {
  return await supabase.auth.signInWithPassword({ email, password })
}

export async function register(email, password, userData = {}) {
  // Supabase criará automaticamente o profile via trigger com os dados passados
  const result = await supabase.auth.signUp({ 
    email, 
    password,
    options: {
      data: {
        nome: userData.nome || '',
        role: userData.role || 'cliente',
        barbearia_id: userData.barbearia_id || null
      }
    }
  })
  
  // Se deu erro na criação, retorna o erro
  if (result.error) {
    return result
  }
  
  // Aguarda um pouco para garantir que o trigger executou
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return result
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser()
  
  if (error || !data?.user) {
    return null
  }
  
  return data.user
}

export async function logout() {
  return await supabase.auth.signOut()
}
