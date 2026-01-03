// Admin page logic
import { supabase } from './supabase.js';
import { getCurrentUser } from './auth.js';

export async function initAdmin() {
    const user = await getCurrentUser();
    
    if (!user) {
        window.location.href = '/login.html';
        return;
    }
    
    // Admin page initialization
    console.log('Admin page initialized');
}

// Initialize on page load
initAdmin();

