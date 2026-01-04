import { supabase } from './supabase.js'

const { data } = await supabase.auth.getUser()
if (!data.user) location.href = 'login.html'

const { data: profile } = await supabase
  .from('profiles')
  .select('*')
  .eq('id', data.user.id)
  .single()

if (profile.role === 'master') location.href = 'master.html'
if (profile.role === 'admin') location.href = 'admin.html'
if (profile.role === 'barbeiro') location.href = 'barber.html'
if (profile.role === 'cliente') location.href = 'client.html'
