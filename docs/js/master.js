// Master page logic
import { supabase } from './supabase.js';
import { getCurrentUser } from './auth.js';

export async function initMaster() {
    const user = await getCurrentUser();
    
    if (!user) {
        window.location.href = '/login.html';
        return;
    }
    
    // Master page initialization
    console.log('Master page initialized');
}

// Initialize on page load
initMaster();

